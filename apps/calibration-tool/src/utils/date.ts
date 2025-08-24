interface formatDateProps {
  dateInput?: Date | string | null;
  type?: 'yyyy/mm/dd, hh:mm';
}

export function formatDate({ dateInput, type = 'yyyy/mm/dd, hh:mm' }: formatDateProps): string {
  if (!dateInput) {
    return '';
  }

  let date: Date;

  if (typeof dateInput === 'string') {
    date = new Date(dateInput);
  } else {
    date = dateInput;
  }

  if (isNaN(date.getTime())) {
    return '';
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');

  switch (type) {
    case 'yyyy/mm/dd, hh:mm':
      return `${year}/${month}/${day}, ${hour}:${min}`;
    default:
      return `${year}/${month}/${day}, ${hour}:${min}`;
  }
}
