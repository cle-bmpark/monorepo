interface TooltipProps {
  title?: string;
  detail: string;
  titleStyle?: string;
  detailStyle?: string;
  style?: 'dark' | 'light';
  isTriangle?: boolean;
}

export default function Tooltip({
  title,
  detail,
  titleStyle = 'text-12 leading-16',
  detailStyle = 'text-14 font-700 leading-20',
  style = 'dark',
  isTriangle = true,
}: TooltipProps) {
  const variantStyle = {
    dark: {
      wrapper: 'bg-grey-900/90',
      title: 'text-grey-500',
      detail: 'text-grey-0',
      triangle: 'border-t-grey-900/90',
    },
    light: {
      wrapper: 'bg-grey-0/60',
      title: 'text-grey-700',
      detail: 'text-grey-950',
      triangle: 'border-t-grey-0/60',
    },
  };

  return (
    <div className='flex flex-col items-center'>
      <div
        className={`shadow-strong flex max-h-52 max-w-52 flex-col gap-1 overflow-auto rounded-lg px-3 py-2 ${variantStyle[style].wrapper}`}
      >
        {title && (
          <p
            className={`whitespace-pre-wrap break-words ${titleStyle} ${variantStyle[style].title}`}
          >
            {title}
          </p>
        )}
        <p
          className={`whitespace-pre-wrap break-words ${detailStyle} ${variantStyle[style].detail}`}
        >
          {detail}
        </p>
      </div>
      {isTriangle && (
        <div
          className={`shadow-strong h-0 w-0 border-b-0 border-l-[8px] border-r-[8px] border-t-[12px] border-solid border-b-transparent border-l-transparent border-r-transparent ${variantStyle[style].triangle}`}
        />
      )}
    </div>
  );
}
