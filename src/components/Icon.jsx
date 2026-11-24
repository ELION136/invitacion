export default function Icon({name,className=''}) {
 const paths={
 envelope:<><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></>,
 heart:<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,
 calendar:<><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-14 4h3m4 0h3m-10 3h3"/></>,
 pin:<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
 church:<><path d="M12 2v6m-3-3h6M3 21V11l9-5 9 5v10H3Zm6 0v-6h6v6"/><path d="M6 12v3m12-3v3"/></>,
 toast:<><path d="m4 3 6 2-2 7a3 3 0 0 1-6-2l2-7Zm16 0-6 2 2 7a3 3 0 0 0 6-2l-2-7ZM5 14l-2 6m-2-1 5 2m13-7 2 6m-3 1 5-2M3 8l6 2m6 0 6-2"/></>,
 users:<><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3m1-17a3 3 0 0 1 0 6m3 11v-3a7 7 0 0 0-3-6"/></>,
 check:<><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
 send:<><path d="m21 3-7 18-4-7-7-4L21 3Zm0 0L10 14"/></>,
 music:<><path d="M9 18V5l12-2v13M9 8l12-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="3"/></>,
 pause:<><path d="M8 5v14M16 5v14"/></>,
 book:<><path d="M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v16c-4-1-7 0-9 2-2-2-5-3-9-2V3Z"/></>
 }
 return <svg className={`icon ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.heart}</svg>
}
