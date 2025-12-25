<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    { title: "Gallery Images", count: 1, icon: "🖼" },
    { title: "Notices", count: 1, icon: "🔔" },
    { title: "Enquiries", count: 12, icon: "📩" },
    { title: "Banners", count: 3, icon: "🎞" }
  ].map((card, i) => (
    <div
      key={i}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">{card.title}</p>
          <h2 className="text-3xl font-bold">{card.count}</h2>
        </div>
        <span className="text-4xl">{card.icon}</span>
      </div>
    </div>
  ))}
</div>
