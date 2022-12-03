import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosApi';

const SubmitNewQuote = () => {
    const navigate = useNavigate();
    const [quote, setQuote] = useState({
        author: '',
        text: '',
        category: '',
    });

    const customerChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        setQuote(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await axiosApi.post('/quotes.json', quote)
        } finally {
            navigate('/')
        }
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select name="category" id="category" value={quote.category} onChange={customerChanged}>
                        <option disabled value="">check</option>
                        <option value="star-wars">Star wars</option>
                        <option value="motivational">Motivational</option>
                        <option value="famouse-people">Famouse people</option>
                        <option value="saying">Saying</option>
                        <option value="humour">Humour</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name='author'
                        placeholder="Author"
                        value={quote.author}
                        onChange={customerChanged}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Quote text</label>
                    <textarea
                        className="form-control"
                        value={quote.text}
                        onChange={customerChanged}
                        id="exampleFormControlTextarea1"
                        name='text'
                        rows={3}
                    ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Save</button>
            </form>
        </div>
    );
};

export default SubmitNewQuote;