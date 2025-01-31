export interface Option {
    id: number;
    description: string;
    is_correct: boolean;
    question_id: number;
    unanswered: boolean;
    photo_url: string | null;
}

export interface Question {
    id: number;
    description: string;
    detailed_solution: string;
    options: Option[];
    topic: string;
}

export interface Quiz {
    id: number;
    title: string;
    description: string;
    topic: string;
    duration: number;
    negative_marks: string;
    correct_answer_marks: string;
    questions: Question[];
}
