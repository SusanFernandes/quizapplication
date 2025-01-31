'use client';
import { useState, useEffect } from 'react';
import { Quiz } from '@/types/quiz';
import QuizComponent from '@//components/QuizComponent';

export default function QuizPage() {
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await fetch('/api/quiz');
                const data = await response.json();
                setQuiz(data);
            } catch (err) {
                setError('Failed to load quiz');
            } finally {
                setLoading(false);
            }
        };

        fetchQuiz();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return quiz ? <QuizComponent quiz={quiz} /> : null;
}