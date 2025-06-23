interface ItemBoxProps {
  title: string;
  content?: string | null;
  contentStyle?: string;
  contentLabel?: string;
}

export default function ItemBox({ title, content, contentStyle, contentLabel }: ItemBoxProps) {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-grey-600'>{title}</p>
      <p className={`${contentStyle}`}>
        {content}
        {contentLabel}
      </p>
    </div>
  );
}
