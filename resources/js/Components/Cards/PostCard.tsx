interface Props {
    post: any;
}

const PostCard = (props: Props) => {
    const { post } = props;

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-red-500/20 transition-all group">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">
                    {post.user.username}
                </span>
                <span className="text-xs text-red-500">🕒 před 2 min</span>
            </div>
            <p className="text-gray-200 text-base">
                Tohle je ukázkový herní moment, který můžeš sdílet s komunitou.
                🎮
            </p>
            <div className="flex gap-6 mt-4 text-sm text-gray-400">
                <button className="hover:text-red-400 transition">
                    ❤️ Like
                </button>
                <button className="hover:text-red-400 transition">
                    💬 Komentář
                </button>
                <button className="hover:text-red-400 transition">
                    🔁 Sdílet
                </button>
            </div>
        </div>
    );
};
export default PostCard;
