import { useEffect, useState } from 'react';
import './index.css';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const target= new Date('November 28, 2024 15:30:00');
        
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime()

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);
        }, 1000)

        return() =>clearInterval(interval)
    }, []);

    function callTimer(param:number) {
        return(param === 0 ? "00" : param)
    }

    return (
        <section className="">
            <section className="timer">
                <div>
                    <h2 className=''></h2>
                    <p className=''></p>                    
                </div>
                <div className='bg-[#dad5d1] bg-opacity-50 rounded-lg'>
                    <section>
                        <p>{callTimer(days)}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{callTimer(hours)}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{callTimer(minutes)}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{callTimer(seconds)}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default Timer;