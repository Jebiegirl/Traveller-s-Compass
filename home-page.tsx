<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <CategoryCard
    title="Beaches"
    count={categoryMap.get("Beaches") || 0}
    image="https://images.unsplash.com/photo-1621789098261-432f5a865ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    color="amber-500"
    icon="beach"
  />
  <CategoryCard
    title="Hills & Valleys"
    count={categoryMap.get("Hills & Valleys") || 0}
    image="https://images.unsplash.com/photo-1688492549682-f219cdb38c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    color="amber-600"
    icon="mountain"
  />
  <CategoryCard
    title="Museums & Heritage"
    count={categoryMap.get("Museums & Heritage") || 0}
    image="https://images.unsplash.com/photo-1647427060118-4911c9821b82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    color="amber-700"
    icon="museum"
  />
  <CategoryCard
    title="Adventure & Sports"
    count={categoryMap.get("Adventure & Sports") || 0}
    image="https://images.unsplash.com/photo-1544961371-516024f8e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    color="amber-800"
    icon="adventure"
  />
</div>