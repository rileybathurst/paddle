// * named CalendarAtom to remove confusion with react-aria-components Calendar component`
import { type CalendarDate, getLocalTimeZone, isWeekend, today } from "@internationalized/date";
import React from 'react';
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "react-aria-components";
import { useLocale } from 'react-aria-components/I18nProvider';
import { useDateFormatter } from 'react-aria/useDateFormatter';

export const CalendarAtom = () => {
  const [selectedDate, setSelectedDate] = React.useState<CalendarDate | null>(null);
  const formatter = useDateFormatter({ dateStyle: 'long' });

  var { locale } = useLocale();
  var now = today(getLocalTimeZone());
  var disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ];

  return (
    <main>

      <Calendar
        aria-label="Select a date with calendar links"
        className="calendar"
        onChange={setSelectedDate}
        value={selectedDate}
        minValue={today(getLocalTimeZone())}
        isDateUnavailable={date => (
          isWeekend(date, locale) ||
          disabledRanges.some((interval) =>
            date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
          )
        )}
      >
        <header className="calendar-header">
          <Button aria-label="Previous month" slot="previous">
            ‹
          </Button>
          <CalendarHeading />
          <Button aria-label="Next month" slot="next">
            ›
          </Button>
        </header>
        <CalendarGrid>
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
      </Calendar>

      <p>Selected date: {selectedDate ? formatter.format(selectedDate.toDate(getLocalTimeZone())) : "None"}</p>
    </main>
  );
};