export interface DayData {
    date: string;
    day: string;
    workoutProgress: number;
    calories: number;
    steps: number;
    sleep: {
        totalAssigned: number;
        taken: number;
    };
    exercisesLeft: number;
    sleepQuality: number;
    name: string;
}

export const days: DayData[] = [
    {
        date: 'Feb 17',
        day: '1',
        workoutProgress: 75,
        calories: 1200,
        steps: 8500,
        sleep: {
            totalAssigned: 8,
            taken: 6.5
        },
        exercisesLeft: 14,
        sleepQuality: 75,
        name: 'Warrior'
    },
    {
        date: 'Feb 18',
        day: '2',
        workoutProgress: 60,
        calories: 950,
        steps: 7200,
        sleep: {
            totalAssigned: 8,
            taken: 7.2
        },
        exercisesLeft: 12,
        sleepQuality: 80,
        name: 'Warrior'
    },
    {
        date: 'Feb 19',
        day: '3',
        workoutProgress: 85,
        calories: 1500,
        steps: 10000,
        sleep: {
            totalAssigned: 8,
            taken: 8
        },
        exercisesLeft: 8,
        sleepQuality: 90,
        name: 'Warrior'
    },
    {
        date: 'Feb 20',
        day: '4',
        workoutProgress: 45,
        calories: 800,
        steps: 5000,
        sleep: {
            totalAssigned: 8,
            taken: 5.5
        },
        exercisesLeft: 18,
        sleepQuality: 65,
        name: 'Warrior'
    },
    {
        date: 'Feb 21',
        day: '5',
        workoutProgress: 90,
        calories: 1800,
        steps: 12000,
        sleep: {
            totalAssigned: 8,
            taken: 7.8
        },
        exercisesLeft: 5,
        sleepQuality: 85,
        name: 'Warrior'
    },
];