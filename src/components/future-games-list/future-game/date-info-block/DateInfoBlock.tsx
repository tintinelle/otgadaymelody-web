import React, { type FC } from 'react';
import './DateInfoBlock.css';
import { type DateInfoBlockProps } from './DateInfoBlockProps';
import { dateReformatted } from '../../../../utils/dateReformatted';

const DateInfoBlock: FC<DateInfoBlockProps> = ({
  dateInfo,
  gameTime,
  className,
  ...props
}): React.ReactElement => {
  const fullDate = dateReformatted(dateInfo);
  return (
    <div className={className ? `${className} date-info-block` : 'date-info-block'}>
      <div
        className={
          className
            ? `${className}-block date-info-block__date-block`
            : 'date-info-block__date-block'
        }
      >
        <span
          className={className ? `${className}-day date-info-block__day` : 'date-info-block__day'}
        >
          {fullDate.date}
        </span>
        <span
          className={
            className ? `${className}-month date-info-block__month` : 'date-info-block__month'
          }
        >
          {fullDate.month}
        </span>
      </div>
      <div
        className={
          className
            ? `${className}-time-block date-info-block__time-block`
            : 'date-info-block__time-block'
        }
      >
        <span
          className={
            className ? `${className}-time date-info-block__time` : 'date-info-block__time'
          }
        >
          {gameTime}
        </span>
        <span
          className={
            className
              ? `${className}-day-of-week date-info-block__day-of-week`
              : 'date-info-block__day-of-week'
          }
        >
          {fullDate.weekDay}
        </span>
      </div>
    </div>
  );
};

export default DateInfoBlock;
