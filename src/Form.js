import { useState } from 'react';

const BookingForm = () => {

    const [tower, setTower] = useState('');
    const [floor, setFloor] = useState('');
    const [room, setRoom] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [comment, setComment] = useState('');

    const clearForm = () => {
        setTower('');
        setFloor('');
        setRoom('');
        setDate('');
        setStartTime('');
        setEndTime('');
        setComment('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    const formData = {
        tower,
        floor,
        room,
        date,
        startTime,
        endTime,
        comment,
    };

    console.log(JSON.stringify(formData));

    clearForm();
}

    const handleClear = (event) => {
        event.preventDefault();

        clearForm();
    }

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <label>
                Выберите башню:
                <select value={tower} onChange={event => setTower(event.target.value)}>
                    <option value="">-- Выберите башню --</option>
                    <option value="A">Башня А</option>
                    <option value="B">Башня В</option>
                </select>
            </label>

            <label>
                Выберите этаж:
                <select value={floor} onChange={event => setFloor(event.target.value)}>
                    <option value="">-- Выберите этаж --</option>
                    {[...Array(25)].map((_, index) => (
                    <option key={index} value={index + 3}>{index + 3} этаж</option>
                    ))}
                </select>
            </label>

            <label>
                Выберите переговорку:
                <select value={room} onChange={event => setRoom(event.target.value)}>
                    <option value="">-- Выберите переговорку --</option>
                    {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>{index + 1} переговорка</option>
                    ))}
                </select>
            </label>

            <label>
                Выберите дату:
                <input type="date" value={date} onChange={event => setDate(event.target.value)} />
            </label>

            <label>
                Выберите интервал времени:
                <input type="time" value={startTime} onChange={event => setStartTime(event.target.value)} />
                -
                <input type="time" value={endTime} onChange={event => setEndTime(event.target.value)} />
            </label>

            <label>
                Комментарий:
                <textarea value={comment} onChange={event => setComment(event.target.value)} />
            </label>
            <div>
                <button type="submit" className="booking-form__button-submit">Отправить</button>
                <button type="button"  className="booking-form__button-clear" onClick={handleClear}>Очистить</button>
            </div>
        </form>
    
    
);
}

export default BookingForm