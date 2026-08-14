/**
 * ============================================================================
 * NIFES FUTMinna — Central Site Data (single source of truth)
 * ============================================================================
 * EVERY piece of content that needs real values lives here. Pages read from
 * this file. To ship real details later, edit this ONE file (or configure
 * Firebase in config.js, which overrides this data automatically).
 *
 * Anything marked `[Update]` is DUMMY data to be replaced with real details.
 * Do not ship `[Update]` values as-is.
 * ============================================================================
 */

const SITE_DATA = {
  /* ---------------------------------------------------------------
   * Global links & contact details
   * --------------------------------------------------------------- */
  links: {
    // [Update] Replace with the real fellowship WhatsApp group invite link
    whatsappGroup: "https://chat.whatsapp.com/DUMMY_REPLACE_WITH_REAL_GROUP_LINK",
    // [Update] Replace with real WhatsApp number (international format, no "+")
    whatsappNumber: "2348000000000",
    whatsappMessage: "Hello NIFES FUTMinna! I'd love to connect with the fellowship.",
    // [Update] Replace with real Twitter / X handle
    twitter: "https://x.com/nifesfutminna",
    // [Update] Replace with the fellowship's real contact email
    email: "contact@nifesfutminna.org",
    // [Update] Replace with the fellowship phone number
    phoneDisplay: "+234 800 000 0000",
    phoneTel: "+2348000000000",
    facebook: "https://www.facebook.com/nifesfutminnaofficial",
    instagram: "https://www.instagram.com/nifesfutminna?igsh=MXMzZDZzZnR2ZWFsaQ==",
    tiktok: "https://www.tiktok.com/@nifesfutmx?_r=1&_t=ZS-94X9qqK7wH6",
    youtube: "https://www.youtube.com/@nifesfutmx"
  },

  /* ---------------------------------------------------------------
   * Weekly rhythm (Home + Events pages)
   * --------------------------------------------------------------- */
  weekly: [
    {
      title: "Sunday Service",
      time: "2:30 PM",
      desc: "The cornerstone of our week. A time of corporate worship, powerful preaching from the Word, and fellowship as one body in Christ. The perfect way to re-center your heart for the week ahead.",
      image: "images/nifes-worship.jpg",
      day: 0,
      hour: 14,
      minute: 30
    },
    {
      title: "Prayer Meeting / Bible Study",
      time: "7:00 PM",
      desc: "Join us as we seek God's face together through prayer and the Word. A dedicated time to intercede for our campus, our nation, and one another, strengthening our dependence on God.",
      image: "images/nifes-prayer.jpg",
      day: 2,
      hour: 19,
      minute: 0
    },
    {
      title: "Thursday Discipleship Cell Group",
      time: "7:00 PM",
      desc: "Connect with a small cell group for deeper discipleship, accountability, and shared growth. A safe space to ask questions, pray together, and build life-long friendships.",
      image: "images/nifes-gathering.jpg",
      day: 3,
      hour: 19,
      minute: 0
    }
  ],

  /* ---------------------------------------------------------------
   * Programs (Events page)
   * --------------------------------------------------------------- */
  programs: [
    {
      title: "LIFE 2026",
      status: "That's a wrap!",
      desc: "Our flagship annual conference bringing together students from across the nation for spiritual growth, powerful teaching, worship, and fellowship. Experience transformative messages, workshops, and an opportunity to connect with the wider NIFES movement.",
      image: "images/life-2026.jpg",
      gallery: "gallery-life2026"
    },
    {
      title: "Leadership Training (LTC)",
      status: "Coming Soon",
      desc: "Intensive training programs designed to equip campus leaders with practical skills in discipleship, evangelism, and ministry management for effective campus witness.",
      image: "images/nifes-gathering22.jpg"
    },
    {
      title: "Easter Discipleship Conference (EDC)",
      status: "Coming Soon",
      desc: "A dedicated week focused on community outreach, street evangelism, and practical ministry in the surrounding communities, putting faith into action.",
      image: "images/bible_study_session.jpg"
    }
  ],

  /* ---------------------------------------------------------------
   * Executives — Gidan Kwano (mostly real) + Bosso (dummy)
   * --------------------------------------------------------------- */
  executives: {
    gk: [
      { name: "Samuel Peter", role: "President", image: "images/executives/gk/president.jpg" },
      { name: "Okpanachi Daniel", role: "Vice President", image: "" },
      { name: "Onyedim Gift", role: "General Secretary", image: "images/executives/gk/gen_sec.JPG" },
      { name: "Ibrahim Abigail", role: "Treasurer", image: "images/executives/gk/treasurer.jpg" },
      { name: "Enyojo Abigail", role: "Sisters Coordinator/Welfare Secretary", image: "images/executives/gk/sis_cord.jpg" },
      { name: "Boniface Chisom", role: "Brothers Coordinator", image: "" },
      { name: "Onoja Fidelia", role: "Financial Secretary", image: "" },
      { name: "Na'allah Beauty", role: "Ushering Unit Secretary", image: "images/executives/gk/ushering_cord.jpg" },
      { name: "Zimuzor Wisdom", role: "Evangelism Unit Secretary", image: "images/executives/gk/evangelism_cord.JPG" },
      { name: "Emejor Kingsley", role: "Follow Up Secretary", image: "" },
      { name: "Williams Tabitha", role: "Prayer Unit Secretary", image: "images/executives/gk/prayer_cord.JPG" },
      { name: "Jordan Anibe", role: "Press Unit Secretary", image: "" },
      { name: "Isah Joshua", role: "Bible Study Unit Secretary", image: "images/executives/gk/bible_cord.JPG" },
      { name: "Achimugu Caleb", role: "Drama Unit Secretary", image: "" },
      { name: "Oyewale Lifted", role: "Technical Unit Secretary", image: "images/executives/gk/technical_cord.JPG" },
      { name: "Oma-benedi Sophia", role: "Assistant General Secretary", image: "images/executives/gk/ass_gen_sec.JPG" },
      { name: "Innocent Healer", role: "Music Director", image: "images/executives/gk/music_director.jpg" },
      { name: "Academic Coordinator", role: "Academic Coordinator", image: "images/executives/gk/academic_cord.JPG" }
    ],
    bosso: [
      // [Update] All Bosso entries are dummy until real names/photos are provided
      { name: "Emeka Nwosu", role: "President", image: "" },
      { name: "Aisha Bello", role: "Vice President", image: "" },
      { name: "Emmanuel David", role: "General Secretary", image: "" },
      { name: "Grace Okonkwo", role: "Treasurer", image: "" },
      { name: "Faith Abraham", role: "Sisters Coordinator", image: "" },
      { name: "Samuel Ola", role: "Brothers Coordinator", image: "" },
      { name: "Tunde Bakare", role: "Financial Secretary", image: "" },
      { name: "Mary Adeyemi", role: "Ushering Unit Secretary", image: "" },
      { name: "Peter Ibe", role: "Evangelism Unit Secretary", image: "" },
      { name: "Joy Nnadi", role: "Follow Up Secretary", image: "" },
      { name: "Daniel Yusuf", role: "Prayer Unit Secretary", image: "" },
      { name: "Ruth Osei", role: "Press Unit Secretary", image: "" },
      { name: "Joseph Kalu", role: "Bible Study Unit Secretary", image: "" },
      { name: "Blessing Eze", role: "Drama Unit Secretary", image: "" },
      { name: "Victor Okafor", role: "Technical Unit Secretary", image: "" },
      { name: "Esther Adeleke", role: "Assistant General Secretary", image: "" },
      { name: "David Ogunleye", role: "Academic Coordinator", image: "" },
      { name: "Praise Chibuzor", role: "Music Director", image: "" }
    ]
  },

  /* ---------------------------------------------------------------
   * Leaders (Contact page) — [Update] dummy names/phones
   * --------------------------------------------------------------- */
  leaders: [
    { role: "President", name: "Emeka Okafor", phone: "+234 800 000 0000", icon: "fas fa-user-shield" },
    { role: "Vice President", name: "Blessing Adewale", phone: "+234 800 000 0001", icon: "fas fa-user-tie" },
    { role: "General Secretary", name: "Emmanuel David", phone: "+234 800 000 0002", icon: "fas fa-pen-nib" },
    { role: "Treasurer", name: "Grace Okonkwo", phone: "+234 800 000 0003", icon: "fas fa-wallet" },
    { role: "Sisters Coordinator", name: "Faith Abraham", phone: "+234 800 000 0004", icon: "fas fa-female" },
    { role: "Brothers Coordinator", name: "Samuel Ola", phone: "+234 800 000 0005", icon: "fas fa-male" }
  ],

  /* ---------------------------------------------------------------
   * Testimonies (Home page) — [Update] replace with real student stories
   * --------------------------------------------------------------- */
  testimonies: [
    {
      quote: "NIFES became my family away from home. The Thursday cell group gave me friends who pray with me and keep me accountable. My walk with God has never been the same.",
      name: "Chiamaka O.", role: "300 Level — Computer Science"
    },
    {
      quote: "I came to campus as a shy fresher not knowing anyone. NIFES welcomed me, discipled me, and today I lead a cell group myself. It truly raises leaders.",
      name: "Daniel A.", role: "400 Level — Mechanical Engineering"
    },
    {
      quote: "Through the prayer meeting and Bible studies, God gave me clarity about my purpose. NIFES shaped the person I am becoming in my career and my faith.",
      name: "Zainab B.", role: "200 Level — Biochemistry"
    }
  ],

  /* ---------------------------------------------------------------
   * Devotionals + Bible Studies (Devotionals page)
   * --------------------------------------------------------------- */
  devotionals: [
    {
      title: "Faith in Uncertainty",
      author: "Bro. Chinedu Okafor",
      date: "August 08, 2026",
      scripture: "Proverbs 3:5-6",
      summary: "In times of doubt and uncertainty, our faith becomes our anchor. Learn how to trust in God's plan even when the path ahead seems unclear.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop",
      content: `
        <h2>Faith in Uncertainty</h2>
        <p><strong>Scripture:</strong> Proverbs 3:5-6</p>
        <p><em>"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."</em></p>
        <h3>Reflection</h3>
        <p>Life is filled with moments of uncertainty. We face decisions that seem impossible, situations that test our faith, and questions that seem to have no answers. In these moments, it's easy to rely on our own understanding and try to control every outcome.</p>
        <p>However, the Scripture reminds us that true faith means trusting in God's plan, even when we can't see the entire path ahead. God's wisdom surpasses our understanding, and His ways are perfect.</p>
        <h3>Key Takeaway</h3>
        <p>Today, choose to surrender your worries and uncertainties to God. Trust that He is guiding your steps, even in the darkness. Remember, faith is not about seeing the entire staircase — it's about taking the next step with confidence in God's guidance.</p>
        <h3>Prayer</h3>
        <p>"Lord, help me to trust in You completely, even when the path ahead is unclear. Give me the courage to surrender my fears and doubts to You. I believe that You have a perfect plan for my life. Amen."</p>
      `
    },
    {
      title: "The Power of Prayer",
      author: "Sis. Temiloluwa Adebayo",
      date: "August 07, 2026",
      scripture: "Philippians 4:6-7",
      summary: "Prayer is more than just words — it's a conversation with the Almighty. Discover how consistent prayer can transform your daily life.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>The Power of Prayer</h2>
        <p><strong>Scripture:</strong> Philippians 4:6-7</p>
        <p><em>"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."</em></p>
        <h3>Reflection</h3>
        <p>Prayer is one of the most powerful tools available to us as believers. It's not merely asking God for things, but rather, it's a profound conversation with the Creator of the universe.</p>
        <p>When we pray consistently, we begin to experience a transformation in our hearts and minds. Anxiety loses its grip, peace floods our souls, and we find clarity in confusion.</p>
        <h3>Key Takeaway</h3>
        <p>Make prayer a daily habit. Don't wait until you're in crisis to talk to God. Share your joys, your struggles, your dreams, and your fears with Him.</p>
        <h3>Prayer</h3>
        <p>"Lord, I thank You for the privilege of prayer. Help me to make prayer a central part of my life. Give me the discipline to pray without ceasing, and open my heart to experience the peace that comes from Your presence. Amen."</p>
      `
    },
    {
      title: "Walking in Love",
      author: "Bro. David Adeyemi",
      date: "August 06, 2026",
      scripture: "1 John 4:7-8",
      summary: "Love is not just a feeling — it's an action. Explore how showing genuine love to those around us reflects God's love.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>Walking in Love</h2>
        <p><strong>Scripture:</strong> 1 John 4:7-8</p>
        <p><em>"Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love."</em></p>
        <h3>Reflection</h3>
        <p>Love is the foundation of our faith. It's not merely a warm feeling or romantic gesture, but rather an active choice to show compassion, kindness, and selflessness to those around us.</p>
        <p>True love challenges us to see beyond our own needs and desires and to extend grace and mercy to others.</p>
        <h3>Key Takeaway</h3>
        <p>This week, make a conscious effort to show love in tangible ways. Visit someone who is lonely, help someone in need, forgive someone who has hurt you, or simply listen with compassion.</p>
        <h3>Prayer</h3>
        <p>"Father, fill my heart with Your love. Help me to see others as You see them — with compassion and grace. Give me the courage to love unconditionally and the wisdom to extend mercy even when it's difficult. Amen."</p>
      `
    },
    {
      title: "A Heart of Gratitude",
      author: "Sis. Ifeoma Nwankwo",
      date: "August 05, 2026",
      scripture: "1 Thessalonians 5:16-18",
      summary: "Gratitude reorients our hearts toward God's goodness. Learn to give thanks in every season of student life.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>A Heart of Gratitude</h2>
        <p><strong>Scripture:</strong> 1 Thessalonians 5:16-18</p>
        <p><em>"Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus."</em></p>
        <h3>Reflection</h3>
        <p>Between deadlines, exams, and campus pressure, gratitude can feel like an extra task rather than a delight. Yet Scripture calls us to give thanks in all circumstances — not for all circumstances.</p>
        <p>Gratitude is a discipline that shifts our attention from what we lack to the God who provides. It changes how we face a difficult semester and how we treat those around us.</p>
        <h3>Key Takeaway</h3>
        <p>Start each day by naming three things you are grateful for. Let thankfulness shape your prayers, your study time, and your conversations.</p>
        <h3>Prayer</h3>
        <p>"Father, give me a grateful heart. Teach me to rejoice in every season and to thank You in all circumstances. Amen."</p>
      `
    },
    {
      title: "Renewing Your Mind",
      author: "Bro. Tunde Adeleke",
      date: "August 04, 2026",
      scripture: "Romans 12:2",
      summary: "Campus culture shapes how we think. Discover how God's Word renews the mind that is being transformed by His grace.",
      image: "https://images.unsplash.com/photo-1522251670181-320150ad6dab?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>Renewing Your Mind</h2>
        <p><strong>Scripture:</strong> Romans 12:2</p>
        <p><em>"Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will."</em></p>
        <h3>Reflection</h3>
        <p>Every lecture, trend, and conversation is shaping your mind. Conformity is passive — it happens whether we choose it or not. Transformation, however, is intentional. It begins when we saturate our minds with God's Word.</p>
        <p>Renewing the mind is a daily choice to let Scripture interpret life, rather than letting the world interpret Scripture.</p>
        <h3>Key Takeaway</h3>
        <p>Set aside time each day for the Word — even a few verses. Ask the Holy Spirit to transform how you think about yourself, your studies, and your future.</p>
        <h3>Prayer</h3>
        <p>"Lord, renew my mind by Your Word. Help me not to conform to this world but to be transformed for Your glory. Amen."</p>
      `
    },
    {
      title: "Strength for the Weary",
      author: "Sis. Amina Yusuf",
      date: "August 03, 2026",
      scripture: "Isaiah 40:29-31",
      summary: "When exams and ministry leave you exhausted, find renewed strength in the God who never grows weary.",
      image: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>Strength for the Weary</h2>
        <p><strong>Scripture:</strong> Isaiah 40:29-31</p>
        <p><em>"He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength. They will soar on wings like eagles."</em></p>
        <h3>Reflection</h3>
        <p>Student life can be exhausting — academic pressure, ministry responsibilities, and relationships all demand energy. It is easy to run on empty and forget that our strength was never meant to come from ourselves.</p>
        <p>Those who hope in the Lord are promised renewed strength. Hope, here, is not passive wishing — it is confident waiting on God's promises.</p>
        <h3>Key Takeaway</h3>
        <p>When you feel weary, don't quit — wait on the Lord. Bring your exhaustion to Him in prayer and let His presence be your refuge and strength.</p>
        <h3>Prayer</h3>
        <p>"Father, I am tired. Renew my strength as I hope in You. Carry me through this season and teach me to rest in Your sufficiency. Amen."</p>
      `
    }
  ],

  bibleStudies: [
    {
      title: "Understanding God's Grace",
      leader: "Bro. Emmanuel O.",
      date: "August 08, 2026",
      scripture: "Romans 3:21-26",
      summary: "An in-depth exploration of God's grace and how it transforms our lives through faith.",
      image: "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>Understanding God's Grace</h2>
        <p><strong>Scripture:</strong> Romans 3:21-26</p>
        <p><em>"But now apart from the law the righteousness of God has been made known, to which the Law and the Prophets testify..."</em></p>
        <h3>Overview</h3>
        <p>Grace is one of the most foundational concepts in Christianity. It means receiving something we don't deserve — God's favor, forgiveness, and salvation through Jesus Christ alone.</p>
        <h3>Key Points</h3>
        <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
          <li>Grace is unmerited favor from God</li>
          <li>It is not earned through works or righteousness</li>
          <li>Grace flows through faith in Jesus Christ</li>
          <li>Grace transforms our lives and makes us righteous before God</li>
        </ul>
        <h3>Prayer</h3>
        <p>"Lord, thank You for Your amazing grace. Help me to fully comprehend the depth of Your love and forgiveness. Amen."</p>
      `
    },
    {
      title: "The Beatitudes: Keys to Happiness",
      leader: "Sis. Toyin A.",
      date: "August 06, 2026",
      scripture: "Matthew 5:3-12",
      summary: "Jesus' teachings in Matthew 5 reveal the true path to spiritual happiness and fulfillment.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop",
      content: `
        <h2>The Beatitudes: Keys to Happiness</h2>
        <p><strong>Scripture:</strong> Matthew 5:3-12</p>
        <p><em>"Blessed are the poor in spirit, for theirs is the kingdom of heaven..."</em></p>
        <h3>Overview</h3>
        <p>The Beatitudes are Jesus' description of the blessed life. They reveal a radically different understanding of happiness — one based on spiritual values rather than worldly success.</p>
        <h3>Prayer</h3>
        <p>"Father, help me to embrace the values of the Beatitudes in my daily life. Amen."</p>
      `
    },
    {
      title: "The Armor of God",
      leader: "Bro. Ifeanyi C.",
      date: "August 04, 2026",
      scripture: "Ephesians 6:10-18",
      summary: "Learn about the spiritual armor God provides for protection against life's challenges.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>The Armor of God</h2>
        <p><strong>Scripture:</strong> Ephesians 6:10-18</p>
        <p><em>"Put on the full armor of God so that you can take your stand against the devil's schemes."</em></p>
        <h3>Overview</h3>
        <p>Paul describes six pieces of spiritual armor that protect believers in their spiritual warfare: the belt of truth, breastplate of righteousness, shoes of the gospel of peace, shield of faith, helmet of salvation, and the sword of the Spirit — the Word of God.</p>
        <h3>Prayer</h3>
        <p>"Heavenly Father, I put on Your armor today. Equip me with truth, righteousness, and faith. Amen."</p>
      `
    }
  ]
};

if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}
