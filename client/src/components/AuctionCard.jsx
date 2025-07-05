import { Link } from "react-router";

export default function AuctionCard({ auction }) {
  const daysLeft = Math.ceil(auction.timeLeft / (1000 * 60 * 60 * 24));
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={auction.itemPhoto || "https://picsum.photos/300"}
          alt={auction.itemName}
          className="object-contain aspect-[4/3] w-96"
        />
        <div className="absolute top-3 right-3 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          {auction.itemCategory}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 text-gray-800 hover:text-indigo-600 transition-colors">
          {auction.itemName}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {auction.itemDescription}
        </p>

        <div className="space-y-3 mb-5">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400 font-medium">Current Price:</span>
            <span className="font-bold text-xl text-emerald-600">
              ${auction.currentPrice || auction.startingPrice}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400 font-medium">Bids:</span>
            <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
              {auction.bidsCount}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400 font-medium">Time Left:</span>
            <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-md">
              {daysLeft > 0 ? `${daysLeft} days` : "Ended"}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-400 mb-4 font-medium">
            Seller: <span className="text-gray-600">{auction?.sellerName || auction?.seller?.name}</span>
          </p>
          <Link to={`/auction/${auction._id}`}>
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-black py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
