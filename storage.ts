private initDestinations() {
  const destinationsData = [
    {
      name: "Rushikonda Beach",
      description: "Golden sands kissed by sunset hues, water sports, and scenic beauty make this beach a perfect getaway. Experience the magic of golden hour as the sun sets over the horizon, casting a warm glow across the pristine coastline.",
      location: "North Coastal Vizag",
      category: "Beaches",
      imageUrl: "https://images.unsplash.com/photo-1623862704462-517f8346e47a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: "4.8",
      distance: "15 km",
      latitude: "17.7842",
      longitude: "83.3833"
    },
    {
      name: "Kailasagiri Hill Park",
      description: "Hilltop park with breathtaking panoramic views, ropeway, and iconic Shiva-Parvati statue. The stunning sunset vistas from this elevated paradise paint the city of Vizag in mesmerizing amber and gold tones.",
      location: "Northern Hills, Vizag",
      category: "Hills & Valleys",
      imageUrl: "https://images.unsplash.com/photo-1695903000145-428889d99f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: "4.6",
      distance: "10 km",
      latitude: "17.7629",
      longitude: "83.3456"
    },
    {
      name: "Submarine Museum",
      description: "A decommissioned submarine converted into a museum with fascinating exhibits of naval artifacts. The evening sun casts long shadows and a warm golden glow on this impressive maritime landmark.",
      location: "Beach Road, Vizag",
      category: "Museums & Heritage",
      imageUrl: "https://images.unsplash.com/photo-1611089370067-ece941f1fa57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: "4.7",
      distance: "8 km",
      latitude: "17.7123",
      longitude: "83.3172"
    },
    {
      name: "Araku Valley",
      description: "Enchanting hill station known for verdant coffee plantations, vibrant tribal culture, and breathtaking landscapes. The golden hour transforms the valley into a canvas of amber, casting a magical spell on the rolling hills.",
      location: "Eastern Ghats, Vizag",
      category: "Hills & Valleys",
      imageUrl: "https://images.unsplash.com/photo-1665553300292-3cfd8e2bf34a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      rating: "4.9",
      distance: "114 km",
      latitude: "18.3358",
      longitude: "82.8670"
    },
    {
      name: "RK Beach",
      description: "Vizag's most famous beach promenade featuring the iconic submarine museum, statues, and vibrant beachfront activities. The golden hour transforms this bustling beach into a magical paradise with stunning amber reflections on the Bay of Bengal.",
      location: "Beach Road, Vizag",
      category: "Beaches",
      imageUrl: "https://images.unsplash.com/photo-1566368204055-4b3c7c8ac2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      rating: "4.9",
      distance: "5 km",
      latitude: "17.7143",
      longitude: "83.3175"
    },
    {
      name: "Yarada Beach",
      description: "Secluded beach surrounded by majestic hills offering pristine views and peaceful atmosphere. As the sun descends towards the horizon, the golden rays illuminate the shoreline, creating a perfect canvas for unforgettable moments.",
      location: "South Vizag",
      category: "Beaches",
      imageUrl: "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      rating: "4.5",
      distance: "20 km",
      latitude: "17.6560",
      longitude: "83.2728"
    },
    {
      name: "Borra Caves",
      description: "Ancient limestone caves with spectacular stalactite and stalagmite formations illuminated by ambient lighting. The golden-hued lights cast magical shadows that dance across the million-year-old formations.",
      location: "Ananthagiri Hills, Vizag",
      category: "Adventure & Sports",
      imageUrl: "https://images.unsplash.com/photo-1564171149223-20b0c88e2b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: "4.8",
      distance: "92 km",
      latitude: "18.2519",
      longitude: "83.0361"
    },
    {
      name: "Simhachalam Temple",
      description: "Ancient Hindu temple dedicated to Lord Narasimha set on a hill with ornate architecture. The evening sun bathes the sacred complex in a divine golden light, highlighting the intricate stone carvings and spiritual atmosphere.",
      location: "Simhachalam, Vizag",
      category: "Museums & Heritage",
      imageUrl: "https://images.unsplash.com/photo-1626248601366-99d44d035b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: "4.7",
      distance: "18 km",
      latitude: "17.7522",
      longitude: "83.2432"
    }
  ];

  destinationsData.forEach(destination => {
    this.createDestination(destination as InsertDestination);
  });
}