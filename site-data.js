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
    whatsappGroup: "https://chat.whatsapp.com/BMBYz6EiBY1CnmKTqMNAG0?s=cl&p=a&mlu=0&ilr=0",
    whatsappNumber: "2348078150481",
    whatsappMessage: "Hello NIFES FUTMinna! I'd love to connect with the fellowship.",
    twitter: "https://x.com/nifesfutminna26",
    // [Update] Replace with the fellowship's real contact email
    email: "contact@nifesfutminna.org",
    phoneDisplay: "+234 807 815 0481",
    phoneTel: "+2348078150481",
    facebook: "https://www.facebook.com/nifesfutminnaofficial",
    instagram: "https://www.instagram.com/nifesfutminna?igsh=MXMzZDZzZnR2ZWFsaQ==",
    youtube: "https://youtube.com/@nifesfutminnaa",
    spotify: "https://open.spotify.com/show/0bRcfd9Nz6wG315jKBrO0z",
    audiomack: "https://audiomack.com/NIFESFUTMINNA"
  },

  /* ---------------------------------------------------------------
   * Weekly rhythm (Home + Events pages)
   * --------------------------------------------------------------- */
  weekly: [
    {
      title: "Sunday Service",
      time: "2:30 PM",
      desc: "The cornerstone of our week. A time of corporate worship, powerful preaching from the Word, and fellowship as one body in Christ. The perfect way to re-center your heart for the week ahead.",
      image: "images/gallery/1.jpg",
      day: 0,
      hour: 14,
      minute: 30,
      campus: "gk"
    },
    {
      title: "Tuesday: Prayer Meeting / Bible Study",
      time: "7:00 PM",
      desc: "Join us as we seek God's face together through prayer and the Word. A dedicated time to intercede for our campus, our nation, and one another, strengthening our dependence on God.",
      image: "images/gallery/prayer.jpg",
      day: 2,
      hour: 19,
      minute: 0,
      campus: "gk"
    },
    {
      title: "Thursday: Discipleship Cell Group",
      time: "7:00 PM",
      desc: "Connect with a small cell group for deeper discipleship, accountability, and shared growth. A safe space to ask questions, pray together, and build life-long friendships.",
      image: "images/gallery/2.jpg",
      day: 3,
      hour: 19,
      minute: 0,
      campus: "gk"
    },
    {
      title: "Sunday Service",
      time: "2:30 PM",
      desc: "The cornerstone of our week. A time of corporate worship, powerful preaching from the Word, and fellowship as one body in Christ. The perfect way to re-center your heart for the week ahead.",
      image: "images/gallery/1.jpg",
      day: 0,
      hour: 14,
      minute: 30,
      campus: "bosso"
    },
    {
      title: "Tuesday: Prayer Meeting",
      time: "7:00 PM",
      desc: "Join us as we seek God's face together in prayer. A dedicated time to intercede for our campus, our nation, and one another, strengthening our dependence on God.",
      image: "images/gallery/prayer.jpg",
      day: 2,
      hour: 19,
      minute: 0,
      campus: "bosso"
    },
    {
      title: "Thursday: Bible Study",
      time: "7:00 PM",
      desc: "Dive deeper into the Word of God together. A time of study, discussion, and application as we grow in understanding and obedience together.",
      image: "images/gallery/bibel_study_meeting.jpg",
      day: 3,
      hour: 19,
      minute: 0,
      campus: "bosso"
    },
    {
      title: "Saturday: Discipleship Cell Group",
      time: "7:00 PM",
      desc: "Connect with a small cell group for deeper discipleship, accountability, and shared growth. A safe space to ask questions, pray together, and build life-long friendships.",
      image: "images/gallery/3.jpg",
      day: 6,
      hour: 19,
      minute: 0,
      campus: "bosso"
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
      image: "images/life26/_MG_6704.jpg",
      gallery: "gallery-life2026"
    },
    {
      title: "Leadership Training (LTC)",
      status: "Coming Soon",
      desc: "Intensive training programs designed to equip campus leaders with practical skills in discipleship, evangelism, and ministry management for effective campus witness.",
      image: "images/gallery/upcoming_programs/ltc.jpg"
    },
    {
      title: "Easter Discipleship Conference (EDC)",
      status: "Coming Soon",
      desc: "A dedicated week focused on community outreach, street evangelism, and practical ministry in the surrounding communities, putting faith into action.",
      image: "images/gallery/upcoming_programs/edc.jpg"
    }
  ],

  /* ---------------------------------------------------------------
   * Executives — Gidan Kwano (mostly real) + Bosso (dummy)
   * --------------------------------------------------------------- */
  executives: {
    gk: [
      { name: "Okpanachi Daniel", role: "President", image: "images/executives/gk/president.jpg" },
      { name: "Kingsley Chikezie Emejor", role: "Vice President", image: "images/executives/gk/vice_president.jpg" },
      { name: "Whyte Victoria Samuel", role: "General Secretary", image: "images/executives/gk/gen_sec.JPG" },
      { name: "Divine Uzoma", role: "Bible Study Secretary", image: "images/executives/gk/bible_cord.JPG" },
      { name: "Adama Ojochonu Augustine", role: "Publicity Secretary", image: "images/executives/gk/publi_cord.jpg" },
      { name: "Ogbe Loveth Ufedojo", role: "Financial Secretary", image: "images/executives/gk/financial_sec.jpg" },
      { name: "Abdullateef Musa Olamilekan", role: "Academic Coordinator", image: "images/executives/gk/academic_cord.JPG" },
      { name: "Sunday Blessing Ogechukwu", role: "Sisters Coordinator/Welfare", image: "images/executives/gk/sis_cord.jpg" },
      { name: "Isah Josiah", role: "Prayer Secretary", image: "images/executives/gk/prayer_cord.JPG" },
      { name: "Israel Emmanuel Ufedojo", role: "Drama Coordinator", image: "images/executives/gk/drama_cod.jpg" },
      { name: "Oyewale Lifted Olayinka", role: "Technical Coordinator", image: "images/executives/gk/technical_cord.JPG" },
      { name: "Boniface Chinaemeze Great", role: "Music Director", image: "images/executives/gk/music_director.jpg" },
      { name: "Armstrong Dozie Chimeremeze", role: "Follow Up Secretary", image: "images/executives/gk/followup_cord.jpg" },
      { name: "Aigbedion Ehinomhen Favour", role: "Evangelism Secretary", image: "images/executives/gk/evangelism_cord.jpg" },
      { name: "Anita Olamide Shehu", role: "Assistant General Secretary", image: "images/executives/gk/ass_gen_sec.JPG" },
      { name: "Tsaku Ephraim Arigu", role: "Ushering Coordinator", image: "images/executives/gk/ushering_cord.jpg" },
      { name: "Praise Samita Enang", role: "Brothers Coordinator", image: "images/executives/gk/brother_cord.jpg" },
      { name: "Godswill Beng", role: "FYB Coordinator", image: "images/executives/gk/fyb_coordi.jpg" },
      { name: "Fidelia Onoja", role: "Treasurer", image: "images/executives/gk/treasurer.jpg" }
    ],
    bosso: [
      { name: "Odafe Oghenekewe Daniel", role: "President", image: "images/executives/bosso/president.jpg" },
      { name: "Adeiza Israel", role: "Vice President", image: "images/executives/bosso/vice_president.jpg" },
      { name: "Victoria Olabisi", role: "General Secretary", image: "images/executives/bosso/gen_sec.jpg" },
      { name: "Sunday Precious Love", role: "Assistant General Secretary", image: "images/executives/bosso/ass_gen_sec.jpg" },
      { name: "Okoye Reinhard", role: "Bible Study Secretary", image: "images/executives/bosso/bible_sec.jpg" },
      { name: "Chukwuemeka Praise Ifeanyi", role: "Academic Secretary", image: "images/executives/bosso/academic_sec.jpg" },
      { name: "Idoko Grace Ochefije", role: "Financial Secretary", image: "images/executives/bosso/financial_sec.jpg" },
      { name: "Comfort Adewole", role: "Treasurer", image: "images/executives/bosso/treasurer.jpg" },
      { name: "Emmanuel Odey", role: "Prayer Secretary", image: "images/executives/bosso/prayer_sec.jpg" },
      { name: "Timothy Godday", role: "Follow Up Secretary", image: "images/executives/bosso/followup_sec.jpg" },
      { name: "Oyinkansola Lydia Olaleye", role: "Sisters & Welfare Coordinator", image: "images/executives/bosso/sis_welfare_cord.jpg" },
      { name: "Emmanuel Ogah", role: "Brothers' Coordinator", image: "images/executives/bosso/bro_cord.jpg" },
      { name: "Victoria Jiya", role: "Ushering Coordinator", image: "images/executives/bosso/ushering_cord.jpg" },
      { name: "Echu Emmanuel", role: "Drama Coordinator", image: "images/executives/bosso/drama_cord.jpg" },
      { name: "Atuogu-Ukah Michael Chimere", role: "Technical Coordinator", image: "images/executives/bosso/technical_cord.jpg" },
      { name: "Kucha KingDavid", role: "Evangelism Secretary", image: "images/executives/bosso/evangelism_sec.jpg" },
      { name: "Vincent Elaigwu Owoicho Echi", role: "Publicity & Media Secretary", image: "images/executives/bosso/publicity_media_sec.jpg" },
      { name: "Moshood Ibrahim Lawal", role: "Music Director", image: "images/executives/bosso/music_director.jpg" }
    ]
  },

  /* ---------------------------------------------------------------
   * Leaders (Contact page) — [Update] dummy names/phones
   * --------------------------------------------------------------- */
  leaders: [
    { role: "Central President", name: "Odafe Oghenekwe Daniel", phone: "+234 908 071 1702", icon: "fas fa-user-shield" },
    { role: "Central Vice President", name: "Okpanachi Daniel", phone: "+234 807 815 0481", icon: "fas fa-user-tie" }
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
      name: "John", role: "200 Level — Biochemistry"
    },
    {
      quote: "NIFES helped me put my academics first without losing my faith. From academic prayer meetings to mentorship and tutorials from senior students, the fellowship carried me to a 5.0 CGPA in my 100 Level. Here, excellence is part of worship.",
      name: "Emmanuel", role: "100 Level — Computer Science"
    },
    {
      quote: "Before NIFES, I was just trying to survive school. The fellowship gave me direction, prayer partners, and a stronger relationship with God. My grades improved and my faith grew at the same time.",
      name: "Maryam S.", role: "200 Level — Physics"
    },
    {
      quote: "Joining NIFES changed my mentality. I learned discipline, consistency, and how to live with purpose. It helped me balance academics, spiritual growth, and leadership without feeling overwhelmed.",
      name: "Samuel T.", role: "300 Level — Electrical Engineering"
    }
  ],

  /* ---------------------------------------------------------------
   * Devotionals + Bible Studies (Devotionals page)
   * --------------------------------------------------------------- */
  devotionals: [
    {
      title: "The Lord Is My Shepherd",
      author: "Sis. Deborah",
      date: "August 16, 2026",
      scripture: "Psalm 23:1-6",
      summary: "God is not a distant ruler but a daily guide who knows your name, leads you to rest, and walks with you through the valley.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop",
      content: `
        <h2>The Lord Is My Shepherd</h2>
        <p><strong>Scripture:</strong> Psalm 23:1-6</p>
        <p><em>"The Lord is my shepherd; I shall not want. He makes me lie down in green pastures; He leads me beside still waters. He restores my soul..."</em></p>
        <h3>Reflection</h3>
        <p>Campus life keeps us running — lectures, deadlines, fellowship activities — and in all the hurry it is easy to lose sight of who is actually leading us. David does not describe God as a distant ruler, but as a shepherd: one who knows his name, leads him to rest, and restores his soul.</p>
        <p>A shepherd never waits for the sheep to find its own way. Even when the path takes us through the valley of the shadow of death — a tough examination, a strained relationship, a pressing financial need — the sheep is never alone. The valley is a path, not a destination, and the Shepherd is walking through it with us.</p>
        <h3>Takeaway</h3>
        <p>Before you open your books or your phone today, let the Shepherd lead you. Spend five quiet minutes in His presence and let Him direct your steps.</p>
        <h3>Prayer</h3>
        <p>"Good Shepherd, thank You for leading me and providing for me. When I walk through valleys this semester, remind me that You are with me. Restore my soul and lead me in Your ways. Amen."</p>
      `
    },
    {
      title: "New Every Morning",
      author: "Bro. Samuel",
      date: "August 17, 2026",
      scripture: "Lamentations 3:22-24",
      summary: "Each morning the supply of God's mercy is renewed. You may have failed yesterday, but grace is not rationed.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>New Every Morning</h2>
        <p><strong>Scripture:</strong> Lamentations 3:22-24</p>
        <p><em>"The steadfast love of the Lord never ceases; His mercies never come to an end; they are new every morning; great is Your faithfulness."</em></p>
        <h3>Reflection</h3>
        <p>Monday. A new week, and for many of us it means resuming the same stress, deadlines, and pressures we carried last week. Yet it is in the middle of deep national sorrow that the prophet Jeremiah writes these words — and he finds not a reason to fear, but a reason for hope: God's mercies are new every morning.</p>
        <p>You may have failed yesterday — a sin, a test, a goal you set and missed. But God's grace is not rationed. Every morning the supply is renewed, because His faithfulness is great. You do not need yesterday's strength for today; today's mercy is already available.</p>
        <h3>Takeaway</h3>
        <p>Start this week by writing down one way God was faithful to you last week, and carry that confidence with you today.</p>
        <h3>Prayer</h3>
        <p>"Lord, thank You that Your mercies are new this morning. I receive fresh grace for this week. Help me to trust Your faithfulness even before I see the outcome. Amen."</p>
      `
    },
    {
      title: "Built on the Rock",
      author: "Sis. Grace",
      date: "August 18, 2026",
      scripture: "Matthew 7:24-27",
      summary: "Hearing God's word is good; obeying it is what makes us stand. The wise builder's secret was practice, not just listening.",
      image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?q=80&w=2071&auto=format&fit=crop",
      content: `
        <h2>Built on the Rock</h2>
        <p><strong>Scripture:</strong> Matthew 7:24-27</p>
        <p><em>"Everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock."</em></p>
        <h3>Reflection</h3>
        <p>Two builders, the same storm. The houses may have looked identical, but their foundations were not. When the rain fell and the floods came, one house stood and the other fell. The difference was never the appearance of the building — it was what it was built on.</p>
        <p>As students we are constantly building: our schedules, our values, our friendships, our reputation. Storms will come — examinations, temptations, disappointments, rejections. Jesus says the wise builder is not the one who merely hears His word, but the one who puts it into practice. Obedience is the foundation. Hearing in fellowship is good; doing is what makes us stand when the storm comes.</p>
        <h3>Takeaway</h3>
        <p>Pick one command of Christ you already know but have not been practicing, and obey it today — in a conversation, a decision, or a habit.</p>
        <h3>Prayer</h3>
        <p>"Lord Jesus, I want my life to be built on You. Search my heart for areas where I hear Your word but do not obey it, and give me the strength to do what You say. Amen."</p>
      `
    },
    {
      title: "Together We Stand",
      author: "Bro. Daniel",
      date: "August 19, 2026",
      scripture: "Ecclesiastes 4:9-12",
      summary: "You don't have to walk alone. When you are weak, a brother or sister is strong; when you fall, someone lifts you up.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>Together We Stand</h2>
        <p><strong>Scripture:</strong> Ecclesiastes 4:9-12</p>
        <p><em>"Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken."</em></p>
        <h3>Reflection</h3>
        <p>Many of us try to walk the Christian life alone, but Scripture insists we were made for community. The early church gathered daily — praying, sharing, and encouraging one another — so that no one had to carry their burdens in isolation (Acts 2:42-47).</p>
        <p>That is the heart of our units and small groups in NIFES. When you are weak, your brother or sister is strong; when you fall, someone lifts you up. Two are better than one, and a threefold cord is not quickly broken. Christianity is not a solo sport, and the strength of the fellowship is measured by how its members stand together.</p>
        <h3>Takeaway</h3>
        <p>Reach out to one fellowship member today. Share a genuine need, or ask how you can pray for them.</p>
        <h3>Prayer</h3>
        <p>"Father, thank You for the body of Christ. Teach me to walk with others, to give help and to receive it. Let our fellowship be a cord of three strands that cannot be broken. Amen."</p>
      `
    },
    {
      title: "A Way of Escape",
      author: "Bro. Emmanuel",
      date: "August 20, 2026",
      scripture: "1 Corinthians 10:13",
      summary: "Every temptation comes with a way out. The escape route is always there — the question is whether we will take it.",
      image: "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>A Way of Escape</h2>
        <p><strong>Scripture:</strong> 1 Corinthians 10:13</p>
        <p><em>"God is faithful; He will not let you be tempted beyond what you can bear. But when you are tempted, He will also provide a way out so that you can endure it."</em></p>
        <h3>Reflection</h3>
        <p>Temptation is common to every student. Examinations tempt us to cheat, social media tempts us to waste time, relationships tempt us to compromise. But Paul tells us two liberating truths: you are not the only one facing this, and God is faithful.</p>
        <p>Because He is faithful, every temptation comes with a way of escape. The escape might be walking away from a conversation, deleting an app, or calling a brother or sister to pray. The way out is always there — the question is whether we will take it. Before the moment of temptation, decide in advance what your escape will be.</p>
        <h3>Takeaway</h3>
        <p>Identify your most common temptation and decide now what your way of escape will be when it comes.</p>
        <h3>Prayer</h3>
        <p>"Faithful God, thank You for always providing a way out. When temptation comes today, open my eyes to see the escape and give me the will to take it. Amen."</p>
      `
    },
    {
      title: "Cast Your Cares",
      author: "Sis. Ruth",
      date: "August 21, 2026",
      scripture: "1 Peter 5:7",
      summary: "What you cannot carry, you can cast. Throw your anxiety onto the One who truly cares for you.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop",
      content: `
        <h2>Cast Your Cares</h2>
        <p><strong>Scripture:</strong> 1 Peter 5:7</p>
        <p><em>"Cast all your anxiety on Him because He cares for you."</em></p>
        <h3>Reflection</h3>
        <p>The word Peter uses for "cast" means to throw or hurl. It is not the polite placing of a problem on a table — it is a deliberate, forceful throwing of a burden off your shoulders. And the reason we can cast our cares is not that we are strong enough to solve them, but that He cares for us.</p>
        <p>Many students carry anxiety silently — about school fees, results, family, or the future. The invitation of Scripture is to throw that weight onto the One whose shoulders are strong enough to carry it. What you cannot carry, you can cast. And once you have cast it, leave it there; do not pick it back up.</p>
        <h3>Takeaway</h3>
        <p>Write down your biggest worry, pray over it, and leave it in God's hands today. Refuse to pick it back up.</p>
        <h3>Prayer</h3>
        <p>"Father, I choose to cast every worry I have been carrying on You. You care for me, so I release my anxiety to You today. Amen."</p>
      `
    },
    {
      title: "Faithful in Small Things",
      author: "Bro. Joseph",
      date: "August 22, 2026",
      scripture: "Luke 16:10",
      summary: "How we handle the small reveals who we are with the large. Faithfulness today builds tomorrow's trust.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>Faithful in Small Things</h2>
        <p><strong>Scripture:</strong> Luke 16:10</p>
        <p><em>"Whoever can be trusted with very little can also be trusted with much."</em></p>
        <h3>Reflection</h3>
        <p>God's kingdom does not usually begin with the big stage. It begins in the small things — faithfully attending fellowship, completing assignments with integrity, keeping your promises, doing your unit's task without being reminded. Jesus says that how we handle the small reveals who we are with the large.</p>
        <p>Faithfulness is not glamorous, but it is the soil out of which promotion grows. As this week ends, remember that God is not searching for people who can do great things once; He is raising people who are faithful in the ordinary things every day. Faithfulness today builds the trust of tomorrow.</p>
        <h3>Takeaway</h3>
        <p>Choose one small responsibility — a class, a duty, a habit — and be meticulous and faithful with it in the coming week.</p>
        <h3>Prayer</h3>
        <p>"Lord, teach me to be faithful in small things. Help me to serve diligently where You have placed me, so that I can be trusted with more. Amen."</p>
      `
    }
  ],

  bibleStudies: [
    {
      title: "Understanding God's Grace",
      leader: "Bro. Emmanuel O.",
      date: "August 22, 2026",
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
      date: "August 15, 2026",
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
      date: "August 08, 2026",
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
    },
    {
      title: "Faith & Academic Excellence",
      leader: "The Academic Unit",
      date: "August 29, 2026",
      scripture: "Colossians 3:23",
      summary: "Your studies are part of your worship. Learn how diligence in academics and devotion to God grow together.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      content: `
        <h2>Faith & Academic Excellence</h2>
        <p><strong>Scripture:</strong> Colossians 3:23</p>
        <p><em>"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."</em></p>
        <h3>Overview</h3>
        <p>Some students wrongly assume that being spiritual means neglecting their studies. But Scripture calls us to work at everything — including our academics — with all our hearts, as working for the Lord.</p>
        <p>NIFES encourages academic excellence through study groups, tutorials, and mentorship, because the God we serve is the God of all truth. Whether it is a calculation, a laboratory report, or a seminar, excellence in our studies is a form of worship and a testimony on campus.</p>
        <h3>Key Points</h3>
        <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
          <li>Study diligently as working for the Lord, not for men</li>
          <li>Use fellowship study groups and tutorials to grow academically</li>
          <li>Pray over your academics — exams, results, and course choices</li>
          <li>Be a witness through integrity, hard work, and excellent character</li>
        </ul>
        <h3>Prayer</h3>
        <p>"Lord, help me to honour You in my studies. Grant me discipline, understanding, and the grace to excel — not for my glory, but for Yours. Amen."</p>
      `
    }
  ]
};

if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}
