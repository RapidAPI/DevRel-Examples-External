interface FormProps {
  text: string;
  setText: (text: string) => void;
  setSummary: (summary: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const Form = ({
  text,
  setText,
  setSummary,
  loading,
  setLoading,
}: FormProps) => {
  const handleClick = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          min_length: 100,
          max_length: 300,
        }),
      });

      const data = await response.json();

      setSummary(data.summary);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded flex flex-col space-y-4 bg-gray-50">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
        className="border rounded p-4"
        rows={10}
        disabled={loading}
      />
      <button
        onClick={handleClick}
        className="bg-black hover:bg-black/80 text-white rounded px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading || !text.trim().length}
      >
        {loading ? "Loading..." : "Summarize"}
      </button>
    </div>
  );
};
