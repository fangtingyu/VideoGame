import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import getCurrentWeek from '../services/CurrentWeek';

interface Props {
    startDate: Date;
}

const WeekDisplay = ({ startDate }: Props) => {
    const currentWeek = getCurrentWeek(startDate);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    return (
        <div>
            <h2>Current Week</h2>
            <SimpleGrid>
                {currentWeek.map((day) => (
                    <li key={day.toDateString()}>
                        {weekDays[day.getDay()]} {day.toLocaleDateString()}
                        {day.toDateString() === today.toDateString() ? ' (Today)' : ''}
                    </li>
                ))}
            </SimpleGrid>
        </div>
    );
};

export default WeekDisplay