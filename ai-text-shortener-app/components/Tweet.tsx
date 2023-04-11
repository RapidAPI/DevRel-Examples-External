interface TweetProps {
  summary: string;
  loading: boolean;
}

export const Tweet = ({ summary = "", loading }: TweetProps) => {
  if (!summary.length) {
    return null;
  }

  if (loading) {
    return (
      <div className="p-2 border space-y-2 rounded bg-white">Loading...</div>
    );
  }

  return (
    <div className="border space-y-2 rounded bg-white overflow-hidden">
      <div className="p-2 border-b flex justify-end items-center space-x-2">
        <button
          className="text-xs text-black border rounded-sm px-2 py-1"
          onClick={() => {
            navigator.clipboard.writeText(summary);
          }}
        >
          Copy
        </button>
        <a
          className="text-xs bg-blue-500 text-white rounded-sm px-2 py-1"
          href={`https://twitter.com/intent/tweet?text=${summary}`}
          target="_blank"
        >
          Tweet
        </a>
      </div>
      <div className="p-2">{summary}</div>
    </div>
  );
};
