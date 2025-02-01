"use client"
import { motion } from "framer-motion"
import { Crown, Medal, Trophy, Star, Award, Sparkles } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const leaderboardData = {
    weekly: [
        {
            rank: 1,
            name: "Sarah Johnson",
            score: 2850,
            quizzes: 45,
            accuracy: "98%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 2,
            name: "Michael Chen",
            score: 2720,
            quizzes: 42,
            accuracy: "96%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 3,
            name: "Emma Wilson",
            score: 2680,
            quizzes: 40,
            accuracy: "95%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 4,
            name: "James Smith",
            score: 2550,
            quizzes: 38,
            accuracy: "94%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 5,
            name: "Lisa Anderson",
            score: 2490,
            quizzes: 37,
            accuracy: "93%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        // Add more users as needed
    ],
    monthly: [
        {
            rank: 1,
            name: "David Miller",
            score: 10500,
            quizzes: 180,
            accuracy: "97%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 2,
            name: "Sophie Turner",
            score: 9800,
            quizzes: 165,
            accuracy: "95%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 3,
            name: "Alex Martinez",
            score: 9600,
            quizzes: 160,
            accuracy: "94%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 4,
            name: "Emily Brown",
            score: 9400,
            quizzes: 155,
            accuracy: "93%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 5,
            name: "Ryan Taylor",
            score: 9200,
            quizzes: 150,
            accuracy: "92%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        // Add more users as needed
    ],
    allTime: [
        {
            rank: 1,
            name: "John Doe",
            score: 52000,
            quizzes: 850,
            accuracy: "99%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 2,
            name: "Jane Smith",
            score: 48000,
            quizzes: 820,
            accuracy: "97%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 3,
            name: "Mike Johnson",
            score: 45000,
            quizzes: 800,
            accuracy: "96%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 4,
            name: "Sarah Williams",
            score: 42000,
            quizzes: 780,
            accuracy: "95%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        {
            rank: 5,
            name: "Chris Davis",
            score: 40000,
            quizzes: 760,
            accuracy: "94%",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        // Add more users as needed
    ],
}

const getRankIcon = (rank: number) => {
    switch (rank) {
        case 1:
            return <Crown className="w-6 h-6 text-yellow-400" />
        case 2:
            return <Medal className="w-6 h-6 text-gray-300" />
        case 3:
            return <Trophy className="w-6 h-6 text-amber-600" />
        default:
            return <Star className="w-6 h-6 text-gray-400" />
    }
}

const LeaderboardComponent = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-transparent bg-clip-text inline-flex items-center gap-3">
                        <Trophy className="w-10 h-10 text-[#ffad05]" />
                        Leaderboard
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Compete with other quiz masters and climb to the top! Check out who's leading across different time periods.
                    </p>
                </motion.div>

                {/* Leaderboard Tabs */}
                <Tabs defaultValue="weekly" className="w-full">
                    <TabsList className="w-full max-w-md mx-auto mb-8">
                        <TabsTrigger value="weekly" className="flex-1">
                            Weekly
                        </TabsTrigger>
                        <TabsTrigger value="monthly" className="flex-1">
                            Monthly
                        </TabsTrigger>
                        <TabsTrigger value="allTime" className="flex-1">
                            All Time
                        </TabsTrigger>
                    </TabsList>

                    {Object.entries(leaderboardData).map(([period, users]) => (
                        <TabsContent key={period} value={period}>
                            <div className="bg-white bg-opacity-5 rounded-xl p-6 backdrop-blur-sm">
                                <div className="grid gap-4">
                                    {/* Top 3 Users */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                        {users.slice(0, 3).map((user, index) => (
                                            <motion.div
                                                key={user.rank}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`relative p-6 rounded-xl ${user.rank === 1
                                                        ? "bg-gradient-to-b from-yellow-400/10 to-transparent"
                                                        : user.rank === 2
                                                            ? "bg-gradient-to-b from-gray-400/10 to-transparent"
                                                            : "bg-gradient-to-b from-amber-600/10 to-transparent"
                                                    }`}
                                            >
                                                <div className="absolute top-2 right-2">{getRankIcon(user.rank)}</div>
                                                <div className="flex flex-col items-center">
                                                    <div className="relative mb-4">
                                                        <Image
                                                            src={user.avatar || "/placeholder.svg"}
                                                            alt={user.name}
                                                            width={80}
                                                            height={80}
                                                            className="rounded-full"
                                                        />
                                                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#ff715b] to-[#ffad05] rounded-full p-2">
                                                            <span className="text-white font-bold text-sm">#{user.rank}</span>
                                                        </div>
                                                    </div>
                                                    <h3 className="font-bold text-lg mb-2">{user.name}</h3>
                                                    <p className="text-2xl font-bold text-[#ffad05] mb-2">{user.score}</p>
                                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                                        <span>{user.quizzes} Quizzes</span>
                                                        <span>•</span>
                                                        <span>{user.accuracy} Accuracy</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Other Users */}
                                    {users.slice(3).map((user, index) => (
                                        <motion.div
                                            key={user.rank}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (index + 3) * 0.1 }}
                                            className="bg-white bg-opacity-5 rounded-lg p-4 hover:bg-opacity-10 transition-all duration-200"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-3 flex-1">
                                                    <div className="w-8 h-8 flex items-center justify-center">{getRankIcon(user.rank)}</div>
                                                    <Image
                                                        src={user.avatar || "/placeholder.svg"}
                                                        alt={user.name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                    />
                                                    <div>
                                                        <h3 className="font-medium">{user.name}</h3>
                                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                                            <span>{user.quizzes} Quizzes</span>
                                                            <span>•</span>
                                                            <span>{user.accuracy} Accuracy</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xl font-bold text-[#ffad05]">{user.score}</p>
                                                    <p className="text-sm text-gray-400">points</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                {/* Achievement Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                        <Sparkles className="w-6 h-6 text-[#ffad05]" />
                        Available Achievements
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { icon: Star, name: "Quick Learner", desc: "Complete 10 quizzes" },
                            { icon: Award, name: "Perfect Score", desc: "Get 100% in any quiz" },
                            { icon: Trophy, name: "Champion", desc: "Top the weekly board" },
                            { icon: Medal, name: "Quiz Master", desc: "Complete 100 quizzes" },
                            { icon: Crown, name: "Legend", desc: "Maintain 95% accuracy" },
                        ].map((achievement, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-5 p-4 rounded-lg backdrop-blur-sm w-40"
                            >
                                <achievement.icon className="w-8 h-8 text-[#ffad05] mx-auto mb-2" />
                                <h3 className="font-medium mb-1">{achievement.name}</h3>
                                <p className="text-sm text-gray-400">{achievement.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default LeaderboardComponent

