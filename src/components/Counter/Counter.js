import React, { useEffect } from 'react';
import './Counter.scss';
import Card from '../Card/Card';
var SECONDS = 1000
const Counter = ({ counter }) => {
    useEffect(() => {
        let cardSecondsEl = document.querySelector('.seconds')
        if (cardSecondsEl) {
            if (cardSecondsEl.classList.contains('animate')) {
                cardSecondsEl.classList.remove('animate')
            } else {
                cardSecondsEl.classList.add('animate')
            }
        }
    }, [counter.seconds])
    useEffect(() => {
        let cardMinutesEl = document.querySelector('.minutes')
        if (cardMinutesEl) {
            cardMinutesEl.classList.add('animate')
            setTimeout(() => {
                cardMinutesEl.classList.remove('animate')
            }, SECONDS)
        }
    }, [counter.minutes])
    useEffect(() => {
        let cardHoursEl = document.querySelector('.hours')
        if (cardHoursEl) {
            cardHoursEl.classList.add('animate')
            setTimeout(() => {
                cardHoursEl.classList.remove('animate')
            }, SECONDS)

        }
    }, [counter.hours])
    useEffect(() => {
        let cardDaysEl = document.querySelector('.days')
        if (cardDaysEl) {
            cardDaysEl.classList.add('animate')
            setTimeout(() => {
                cardDaysEl.classList.remove('animate')
            }, SECONDS)
        }
    }, [counter.days])
    return (<div className="Counter-wrapper">
        <span className="Counter-wrapper__title" >We're launching soon</span>
        <div className="Counter-wrapper__timer">
            {
                Object.keys(counter).length ?
                    Object.keys(counter).map((x, index) => (
                        <>
                            <Card key={index} >
                                <div className={"Counter-wrapper__timer-block "}>
                                    <span className={"Counter-wrapper__timer-block--value top " + x}></span>
                                    <span className={" flip-card " + x}>{counter[x]}</span>
                                    <span className={"Counter-wrapper__timer-block--value bottom " + x}></span>

                                </div>
                                <span className="Counter-wrapper__timer--title">{x}</span>
                            </Card>


                        </>
                    ))
                    : null
            }
        </div>
    </div >
    )
}

export default React.memo(Counter)