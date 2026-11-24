import { useEffect, useRef, useState } from 'react'
import { BODA } from './config.js'
import Icon from './components/Icon.jsx'
import Confirmacion from './components/Confirmacion.jsx'
function Countdown() {
 const [now,setNow]=useState(Date.now())
 useEffect(()=>{const id=setInterval(()=>setNow(Date.now()),1000);return()=>clearInterval(id)},[])
 const t=Math.max(0,Math.floor((new Date(BODA.fechaISO)-now)/1000))
 return <div className="countdown">{[[Math.floor(t/86400),'Días'],[Math.floor(t/3600)%24,'Horas'],[Math.floor(t/60)%60,'Minutos'],[t%60,'Segundos']].map(([v,l])=><div key={l}><strong>{String(v).padStart(2,'0')}</strong><span>{l}</span></div>)}</div>
}
function Calendar(){
 const save=()=>{const data='BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:oliver-beatriz-20270109@invitacion\r\nDTSTAMP:20261124T000000Z\r\nDTSTART:20270109T170000Z\r\nDTEND:20270109T220000Z\r\nSUMMARY:Boda de Oliver y Beatriz\r\nLOCATION:Iglesia Evangélica Bautista ADONAI - Sacaba Abra\r\nEND:VEVENT\r\nEND:VCALENDAR';const url=URL.createObjectURL(new Blob([data],{type:'text/calendar;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='boda-oliver-beatriz.ics';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
 return <button className="btn calendar-button" onClick={save}><Icon name="calendar"/>Guardar en mi calendario</button>
}
export default function App(){
 const [opened,setOpened]=useState(false),[page,setPage]=useState(0),[playing,setPlaying]=useState(false),[audioError,setAudioError]=useState(false)
 const [opening,setOpening]=useState(false),[drag,setDrag]=useState(0),[turning,setTurning]=useState(false),[direction,setDirection]=useState(1)
 const audio=useRef(null), touch=useRef(null), heading=useRef(null), first=useRef(true), timer=useRef(null), turnTimer=useRef(null), paper=useRef(null)
 useEffect(()=>()=>{clearTimeout(timer.current);clearTimeout(turnTimer.current)},[])
 const go=(n)=>{if(turning||n<0||n>4||n===page)return;setDirection(n>page?1:-1);setTurning(true);setDrag(0);turnTimer.current=setTimeout(()=>{setPage(n);setTurning(false)},450)}
 const startDrag=e=>{if(e.target.closest('button,a,input,select,label,fieldset'))return;touch.current=[e.clientX,e.clientY]}
 const moveDrag=e=>{if(!touch.current)return;const dx=e.clientX-touch.current[0],dy=e.clientY-touch.current[1];if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>10)setDrag(Math.max(-160,Math.min(160,dx)))}
 const endDrag=e=>{if(!touch.current)return;const dx=e.clientX-touch.current[0],dy=e.clientY-touch.current[1];touch.current=null;setDrag(0);if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.2)go(page+(dx<0?1:-1))}
 const close=()=>{setOpened(false);setOpening(false);setPage(0);first.current=true}

 useEffect(()=>{if(!opened)return; if(first.current){first.current=false;return} heading.current?.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'})},[page,opened])
 useEffect(()=>{const key=e=>{if(!opened||['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName))return;if(e.key==='ArrowRight')go(page+1);if(e.key==='ArrowLeft')go(page-1);if(e.key==='Escape')close()};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[opened,page,turning])
 const music=async()=>{try{if(audio.current.paused)await audio.current.play();else audio.current.pause()}catch{setAudioError(true)}}
 const open=()=>{if(opening)return;setOpening(true);if(audio.current?.paused)music();timer.current=setTimeout(()=>{setOpened(true);setOpening(false)},2100)}
 return <div className={`invitation letter-experience ${opened?'is-open':''} ${opening?'is-opening':''}`}>
 <audio ref={audio} src={BODA.musica.archivo} loop preload="none" onPlay={()=>{setPlaying(true);setAudioError(false)}} onPause={()=>setPlaying(false)} onError={()=>setAudioError(true)}/>
 <div className="ambient" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i} style={{'--i':i}}/>)}</div>
 {!opened?<main className="welcome"><p className="eyebrow">UNA CARTA PARA TI</p><div className="envelope-scene"><div className="envelope"><div className="envelope-back"/><div className="letter"><img src="./images/anillos.png" alt=""/><span>Con todo nuestro amor</span><h1>Oliver <em>&</em> Beatriz</h1><p>09 · 01 · 2027</p></div><div className="envelope-pocket"/><div className="envelope-flap"/><button disabled={opening} className="seal" onClick={open} aria-label="Romper el sello y abrir la carta">O<span>&</span>B</button></div><img className="envelope-leaf" src="./images/eucalipto.png" alt=""/></div><p className="gesture-prompt">{opening?'Una historia de amor, para compartir…':'Toca el sello para abrir la carta'}</p><p className="welcome-note">Hay invitaciones que se guardan en el corazón.</p><span className="sound-note"><Icon name="music"/> Sin principio ni final · Abel Pintos</span></main>:<>
 <header><button className="monogram" onClick={close} aria-label="Guardar la carta en el sobre">O <em>&</em> B</button><button className={`music ${playing?'playing':''}`} onClick={music} aria-label={playing?'Pausar música':'Reproducir música'} aria-pressed={playing}><Icon name={playing?'pause':'music'}/><span>{audioError?'Reintentar':playing?'Pausar':'Música'}</span></button></header>
 <main className="stage" aria-label="Carta de boda. Desliza a los lados o toca las esquinas inferiores para pasar las hojas." onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={()=>{touch.current=null;setDrag(0)}}>
 <div className="paper-stack" style={{'--drag':`${drag}px`,'--tilt':`${drag/28}deg`,'--direction':direction}}>
 <article ref={paper} className={`chapter chapter-${page} ${turning?'turning':''} ${drag?'dragging':''}`} key={page} aria-labelledby="chapter-title"><img src="./images/eucalipto.png" className="botanical botanical-left" alt=""/><img src="./images/eucalipto.png" className="botanical botanical-right" alt=""/>
 <div className="chapter-content"><p className="eyebrow">{['CON LA BENDICIÓN DE DIOS','EL COMIENZO DE NUESTRO SIEMPRE','RODEADOS DE AMOR','UN DÍA PARA RECORDAR','TU PRESENCIA, NUESTRO MEJOR REGALO'][page]}</p>
 <h1 id="chapter-title" ref={heading} tabIndex={-1} className={page===0?'couple':''}>{page===0?<>{BODA.novio}<em>&</em>{BODA.novia}</>:['','Nos casamos','Nuestra familia','La celebración','¿Nos acompañas?'][page]}</h1>
 <div className="ornament" aria-hidden="true"><img src="./images/ornamento.png" alt=""/></div>
 {page===0&&<><p className="intro">Hay momentos que el corazón guarda para siempre.<br/>Este será uno de ellos.</p><div className="date-line"><span>SÁBADO</span><strong>09</strong><span>ENERO · 2027</span></div><p className="location">Sacaba, Cochabamba · Bolivia</p><p className="paper-whisper">El comienzo de nuestro siempre</p></>}
 {page===1&&<><img src="./images/anillos.png" className="rings" alt="Anillos de boda dorados"/><p className="prose">Con inmensa gratitud a Dios por habernos unido, queremos invitarte a compartir el día en que sellaremos nuestro amor delante de Él, de nuestras familias y de quienes más queremos.</p><blockquote>“Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.”<cite>Colosenses 3:14</cite></blockquote><Countdown/><Calendar/></>}
 {page===2&&<><p className="intro">Con la bendición de nuestros padres<br/>y el cariño de nuestros padrinos.</p><div className="family-grid">{[['PADRES DE LA NOVIA',BODA.padresNovia],['PADRES DEL NOVIO',BODA.padresNovio],['PADRINOS RELIGIOSOS',BODA.padrinosReligion],['PADRINOS CIVILES',BODA.padrinosCivil]].map(([label,names])=><div key={label}><Icon name="users"/><h2>{label}</h2>{names.map(n=><p key={n}>{n}</p>)}</div>)}</div><p className="small-quote">Dos familias, una nueva historia.</p></>}
 {page===3&&<><p className="intro">9 de enero de 2027</p><div className="event-grid"><section className="event"><span className="event-icon"><Icon name="church"/></span><h2>Ceremonia</h2><p className="event-time">13:00 h</p><h3>{BODA.ceremonia.lugar}</h3><p>{BODA.ceremonia.ubicacion}</p><a className="btn secondary" href={BODA.ceremonia.mapsUrl} target="_blank" rel="noreferrer"><Icon name="pin"/>Ver ubicación</a></section><section className="event"><span className="event-icon"><Icon name="toast"/></span><h2>Recepción</h2><p className="event-time">Después de la ceremonia</p><h3>{BODA.recepcion.lugar}</h3><p>{BODA.recepcion.referencia}</p><a className="btn secondary" href={BODA.recepcion.mapsUrl} target="_blank" rel="noreferrer"><Icon name="pin"/>Cómo llegar</a></section></div><Calendar/></>}
 {page===4&&<><Confirmacion/><p className="rsvp-note">{BODA.confirmacion.whatsapp?'Tu respuesta se enviará por WhatsApp.':'Se abrirá WhatsApp para que elijas el contacto de los novios y envíes tu respuesta.'}</p><p className="signature">Con amor, Oliver y Beatriz</p></>}
 </div></article>
 {page>0&&<button className="paper-corner paper-corner-back" onClick={()=>go(page-1)} aria-label="Volver a la hoja anterior" disabled={turning}><span/></button>}
 {page<4&&<button className="paper-corner paper-corner-next" onClick={()=>go(page+1)} aria-label="Pasar la hoja de la carta" disabled={turning}><span/></button>}
 </div></main>
 <div className="paper-guidance" aria-live="polite">{page===4?'Con cariño, te esperamos.':'Desliza la carta o toca su esquina para pasar la hoja'}<span aria-hidden="true" className="swipe-line"/></div>
 </>}
 </div>
}


