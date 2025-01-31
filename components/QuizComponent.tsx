'use client';
import { useState, useEffect } from 'react';
import { Quiz, Question } from '@/types/quiz';
import { Clock } from 'lucide-react';

interface QuizComponentProps {
    quiz: Quiz;
}

export default function QuizComponent({ quiz }: QuizComponentProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (timeLeft > 0 && !isFinished) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setIsFinished(true);
        }
    }, [timeLeft, isFinished]);

    const handleAnswerSelect = (questionId: number, optionId: number) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: optionId,
        }));
    };

    const calculateScore = () => {
        let score = 0;

        Object.entries(selectedAnswers).forEach(([questionId, selectedOptionId]) => {
            // Ensure question ID comparison works correctly
            const question = quiz.questions.find((q) => String(q.id) === questionId);
            if (!question) return;

            const selectedOption = question.options.find((o) => String(o.id) === selectedOptionId);

            // Ensure the values are correctly converted to numbers
            const correctMarks = Number(quiz.correct_answer_marks) || 0;
            const negativeMarks = Number(quiz.negative_marks) || 0;

            if (selectedOption?.is_correct) {
                score += correctMarks;
            } else {
                score -= negativeMarks;
            }
        });

        return score;
    };

    const currentQuestion: Question = quiz.questions[currentQuestionIndex];

    const handleSubmit = () => {
        setIsFinished(true);
    };

    if (isFinished) {
        return (
            <div className="max-w-4xl mx-auto p-6 pt-20 space-y-6">
                <div className="bg-[#222222] rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
                    <div className="mb-4">
                        <p className="text-lg">Final Score: {calculateScore()}</p>
                    </div>
                    <div className="space-y-4">
                        {quiz.questions.map((question, index) => (
                            <div key={question.id} className="border rounded-lg p-4">
                                <p className="font-medium mb-2">Question {index + 1} : {question.description}</p>
                                <div className="space-y-2">
                                    {question.options.map((option) => (
                                        <div
                                            key={option.id}
                                            className={`border rounded-lg p-2 ${option.is_correct
                                                ? 'text-green-600 border-green-500'
                                                : selectedAnswers[question.id] === option.id
                                                    ? 'text-red-600 border-red-500'
                                                    : 'border-gray-500'
                                                }`}
                                        >
                                            {option.description}
                                            {option.is_correct && ' ✓'}
                                        </div>
                                    ))}
                                </div>
                                {selectedAnswers[question.id] && (
                                    <div className="mt-2 p-2 bg-[#333333] rounded">
                                        <p className="font-medium">Explanation:</p>
                                        <p>{question.detailed_solution.replace(/\*\*|"""|__|~~/g, '')}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 pt-20 space-y-5">
            <div className="bg-[#222222] rounded-lg shadow-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">{quiz.title}</h1>
                    <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>
                            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                        </span>
                    </div>
                </div>
                <p className="text-white-600">{quiz.topic}</p>
            </div>

            <div className="bg-[#222222] rounded-lg shadow-lg p-6">
                <div className="mb-6">
                    <span className="text-sm text-white-700">
                        Question {currentQuestionIndex + 1} of {quiz.questions.length}
                    </span>
                    <p className="text-lg mt-2">{currentQuestion.description}</p>
                </div>

                <div className="space-y-4">
                    {currentQuestion.options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
                            className={`w-full text-left p-4 rounded-lg border transition-colors ${selectedAnswers[currentQuestion.id] === option.id
                                ? 'px-8 py-3 rounded-full bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-white font-medium text-lg shadow-lg'
                                : 'border-gray-100 hover:bg-[#222222]/50'
                                }`}

                        >
                            {option.description}
                        </button>
                    ))}
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                        disabled={currentQuestionIndex === 0}
                        className="px-4 py-2 text-white-600 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    {currentQuestionIndex === quiz.questions.length - 1 ? (
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                            Submit Quiz
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-white font-medium text-lg shadow-lg"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}