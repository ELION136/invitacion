import { useEffect, useState } from 'react'

function calcular(objetivo) {
  const diff = Math.max(0, objetivo - Date.now())
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff / 3600000) % 24),
    minutos: Math.floor((diff / 60000) % 60),
    segundos: Math.floor((diff / 1000) % 60),
    terminado: diff === 0,
  }
}

export default function useCountdown(fechaISO) {
  const objetivo = new Date(fechaISO).getTime()
  const [tiempo, setTiempo] = useState(() => calcular(objetivo))

  useEffect(() => {
    const id = setInterval(() => setTiempo(calcular(objetivo)), 1000)
    return () => clearInterval(id)
  }, [objetivo])

  return tiempo
}
