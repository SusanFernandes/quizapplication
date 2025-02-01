import React, { useState, useEffect } from 'react';
import { Book, Search, BookmarkPlus, BookmarkCheck, AlertCircle, ChevronRight, Filter, BarChart } from 'lucide-react';

const Library = () => {
    const [studyMaterial, setStudyMaterial] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [bookmarks, setBookmarks] = useState<number[]>([]);
    const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
    const [progress, setProgress] = useState<Record<number, boolean>>({});
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [sortBy, setSortBy] = useState('default');

    // Load saved state from localStorage
    useEffect(() => {
        const loadSavedState = () => {
            const savedBookmarks = localStorage.getItem('studyBookmarks');
            const savedProgress = localStorage.getItem('studyProgress');

            if (savedBookmarks) {
                setBookmarks(JSON.parse(savedBookmarks));
            }
            if (savedProgress) {
                setProgress(JSON.parse(savedProgress));
            }
        };

        loadSavedState();
    }, []);

    // Fetch study material
    useEffect(() => {
        const fetchStudyMaterial = async () => {
            try {
                const response = await fetch('/api/quiz');
                const data = await response.json();

                const organizedData = data.questions.reduce((acc, question) => {
                    if (!acc[question.topic]) {
                        acc[question.topic] = [];
                    }

                    const correctOption = question.options.find(opt => opt.is_correct);

                    acc[question.topic].push({
                        id: question.id,
                        question: question.description,
                        correctAnswer: correctOption?.description || 'Not available',
                        explanation: question.detailed_solution,
                        difficulty: question.difficulty_level || 'medium',
                        topic: question.topic
                    });

                    return acc;
                }, {});

                setStudyMaterial(organizedData);
            } catch (error) {
                console.error('Failed to fetch study material:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudyMaterial();
    }, []);

    // Save bookmarks and progress to localStorage
    useEffect(() => {
        localStorage.setItem('studyBookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    useEffect(() => {
        localStorage.setItem('studyProgress', JSON.stringify(progress));
    }, [progress]);

    const toggleBookmark = (questionId: number) => {
        setBookmarks(prev =>
            prev.includes(questionId)
                ? prev.filter(id => id !== questionId)
                : [...prev, questionId]
        );
    };

    const toggleProgress = (questionId: number) => {
        setProgress(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    const filterAndSortQuestions = (questions) => {
        let filtered = questions;

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(q =>
                q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.correctAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.explanation.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply bookmarks filter
        if (showBookmarksOnly) {
            filtered = filtered.filter(q => bookmarks.includes(q.id));
        }

        // Apply difficulty filter
        if (difficultyFilter !== 'all') {
            filtered = filtered.filter(q => q.difficulty === difficultyFilter);
        }

        // Apply sorting
        switch (sortBy) {
            case 'difficulty':
                filtered.sort((a, b) => a.difficulty.localeCompare(b.difficulty));
                break;
            case 'bookmarked':
                filtered.sort((a, b) => (bookmarks.includes(b.id) ? 1 : -1));
                break;
            case 'progress':
                filtered.sort((a, b) => (progress[b.id] ? 1 : -1));
                break;
        }

        return filtered;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Header with Search and Filters */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <Book className="w-8 h-8 text-blue-600" />
                        <h1 className="text-3xl font-bold text-gray-800">Study Library</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <BarChart className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-600">
                            Progress: {Object.values(progress).filter(Boolean).length} / {
                                Object.values(studyMaterial).flat().length
                            }
                        </span>
                    </div>
                </div>

                {/* Search and Filters Bar */}
                <div className="bg-white rounded-lg shadow-lg p-4 flex flex-wrap gap-4">
                    {/* Search */}
                    <div className="flex-1 min-w-[200px]">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex items-center space-x-4">
                        <select
                            value={difficultyFilter}
                            onChange={(e) => setDifficultyFilter(e.target.value)}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Difficulties</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="default">Default Sort</option>
                            <option value="difficulty">Sort by Difficulty</option>
                            <option value="bookmarked">Sort by Bookmarked</option>
                            <option value="progress">Sort by Progress</option>
                        </select>

                        <button
                            onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${showBookmarksOnly ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            <BookmarkCheck className="w-5 h-5" />
                            <span>Bookmarked</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Topics sidebar */}
                <div className="md:col-span-1">
                    <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
                        <h2 className="text-lg font-semibold mb-4">Topics</h2>
                        <div className="space-y-2">
                            {Object.keys(studyMaterial).map((topic) => (
                                <button
                                    key={topic}
                                    onClick={() => setSelectedTopic(topic)}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedTopic === topic
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{topic}</span>
                                        <span className="text-sm text-gray-500">
                                            {studyMaterial[topic].length} items
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Questions and answers */}
                <div className="md:col-span-3">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        {selectedTopic ? (
                            <div className="space-y-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                                    {selectedTopic}
                                </h2>
                                {filterAndSortQuestions(studyMaterial[selectedTopic]).map((item, index) => (
                                    <div key={item.id} className="border-b last:border-b-0 pb-6">
                                        <div className="flex items-start space-x-2">
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-lg font-medium text-gray-800">
                                                        Question {index + 1}
                                                    </h3>
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => toggleProgress(item.id)}
                                                            className={`p-2 rounded-lg ${progress[item.id] ? 'text-green-600' : 'text-gray-400'
                                                                }`}
                                                        >
                                                            <AlertCircle className="w-5 h-5" />
                                                        </button>
                                                        <button
                                                            onClick={() => toggleBookmark(item.id)}
                                                            className={`p-2 rounded-lg ${bookmarks.includes(item.id) ? 'text-blue-600' : 'text-gray-400'
                                                                }`}
                                                        >
                                                            {bookmarks.includes(item.id) ? (
                                                                <BookmarkCheck className="w-5 h-5" />
                                                            ) : (
                                                                <BookmarkPlus className="w-5 h-5" />
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>

                                                <p className="text-gray-700 mb-4">{item.question}</p>

                                                <div className="bg-green-50 p-4 rounded-lg mb-4">
                                                    <p className="font-medium text-green-800">Correct Answer:</p>
                                                    <p className="text-green-700">{item.correctAnswer}</p>
                                                </div>

                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <AlertCircle className="w-5 h-5 text-blue-600" />
                                                        <p className="font-medium text-blue-800">Explanation:</p>
                                                    </div>
                                                    <p className="text-blue-700">{item.explanation}</p>
                                                </div>

                                                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                                                    <span className="flex items-center space-x-1">
                                                        <Filter className="w-4 h-4" />
                                                        <span>Difficulty: {item.difficulty}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500">
                                    Select a topic from the sidebar to view study material
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;