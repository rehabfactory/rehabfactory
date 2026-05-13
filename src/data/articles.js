import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';

export const articles = [
  {
    id: 'first-appointment',
    slug: 'first-physiotherapy-appointment',
    category: 'Getting Started',
    readTime: '5 min',
    title: 'What to Expect at Your First Physiotherapy Appointment',
    desc: 'Your first appointment at Rehab Factory is not about jumping straight into treatment. It starts with a conversation.',
    img: '/articles/your-first-appointment.webp',
    content: [
      {
        type: 'intro',
        text: 'Your first appointment at Rehab Factory is not about jumping straight into treatment. It starts with a conversation. We want to understand your injury, your history, and what you are hoping to work towards before we design anything.'
      },
      {
        type: 'paragraph',
        text: 'A lot of people come into their first physiotherapy appointment unsure of what to expect. Some assume it will be mostly hands-on treatment. Others worry they need to know exactly what is wrong before they walk in. The reality is simpler than that.'
      },
      {
        type: 'paragraph',
        text: 'Your first appointment is an assessment. It is a chance for us to get a thorough picture of what is going on before we decide on anything.'
      },
      {
        type: 'heading',
        text: 'We start with a conversation'
      },
      {
        type: 'paragraph',
        text: 'Before we look at anything physically, we talk. Your physiotherapist will ask about your symptoms, when they started, what makes them better or worse, and how they are affecting your daily life. We will also ask about your medical history, any previous injuries, your activity level, and what you want to get back to doing.'
      },
      {
        type: 'paragraph',
        text: 'That last part matters a lot to us. Whether you want to return to competitive sport, get back to work without pain, or simply move through your day more comfortably, your goals shape the way we approach your programme.'
      },
      {
        type: 'heading',
        text: 'Then we assess'
      },
      {
        type: 'paragraph',
        text: 'Once we have a clear picture of your history and goals, your physiotherapist will carry out a physical assessment. This typically involves observing how you move, testing your strength and range of motion, and assessing the area of concern. We will always explain what we are doing and why, and if anything is uncomfortable, let us know and we will adjust.'
      },
      {
        type: 'paragraph',
        text: 'The aim of this assessment is to understand not just where the problem is, but why it is there and what is needed to address it.'
      },
      {
        type: 'heading',
        text: 'We explain what we found'
      },
      {
        type: 'paragraph',
        text: 'After the assessment, your physiotherapist will walk you through what they found, in plain language. No unnecessary jargon. If something is unclear, ask us to explain it differently. We want you to leave with a clear understanding of your situation.'
      },
      {
        type: 'paragraph',
        text: 'If we believe your presentation requires input from another health professional, we will tell you that directly and refer you appropriately.'
      },
      {
        type: 'heading',
        text: 'We design your plan together'
      },
      {
        type: 'paragraph',
        text: 'Based on the assessment, your physiotherapist will discuss a treatment plan with you. At Rehab Factory, that plan will almost always centre on an individualised exercise programme. We will explain the reasoning behind the approach, what the programme involves, and what to expect over the coming weeks.'
      },
      {
        type: 'paragraph',
        text: 'You will also leave your first appointment with an understanding of session frequency, what you can do between appointments, and any activity modifications worth considering in the short term.'
      },
      {
        type: 'heading',
        text: 'A few things to bring or keep in mind'
      },
      {
        type: 'paragraph',
        text: 'Wear comfortable clothing you can move in. If your concern involves a specific area such as a knee or shoulder, make sure that area is accessible. If you have any relevant imaging such as X-rays or MRI scans, bring those along. WorkCover and TAC patients should bring their claim details.'
      },
      {
        type: 'paragraph',
        text: 'You do not need a GP referral to book at Rehab Factory. You can contact us directly.'
      },
      {
        type: 'heading',
        text: 'One more thing'
      },
      {
        type: 'paragraph',
        text: 'Your first appointment is not just for us to assess you. It is for you to assess us. We want you to feel confident that the approach we are taking makes sense for your situation. If you have questions at any point, ask them. The more we understand each other from the start, the better your programme will be.'
      }
    ]
  },
  {
    id: 'back-pain-signs',
    slug: 'five-signs-back-pain-needs-physio',
    category: 'Injury and Pain',
    readTime: '4 min',
    title: 'Five Signs Your Back Pain Needs a Physiotherapist',
    desc: 'Back pain is one of the most common reasons people visit a physiotherapy clinic. Here are five signs that your back pain may benefit from a proper clinical assessment.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    content: [
      {
        type: 'intro',
        text: 'Back pain is one of the most common reasons people visit a physiotherapy clinic. But not all back pain is the same, and not everyone knows when it is worth seeking help. Here are five signs that your back pain may benefit from a proper clinical assessment.'
      },
      {
        type: 'paragraph',
        text: 'Most people will experience back pain at some point in their lives. For some it resolves quickly with rest and activity modification. For others it lingers, recurs, or gradually begins to affect more and more of daily life.'
      },
      {
        type: 'paragraph',
        text: 'Knowing when to seek help can make a significant difference to how your back pain is managed and how long it affects you.'
      },
      {
        type: 'heading',
        text: '1. Your pain has lasted longer than two weeks'
      },
      {
        type: 'paragraph',
        text: 'Acute back pain often settles with time and activity modification. But if your pain has been present for more than two to three weeks without improvement, it is worth getting a clinical assessment. Persistent back pain does not always mean something serious is wrong, but it does mean something is not resolving on its own and may benefit from a structured management approach.'
      },
      {
        type: 'heading',
        text: '2. Your pain is affecting your sleep or daily activity'
      },
      {
        type: 'paragraph',
        text: 'If back pain is waking you at night, making it difficult to get dressed, sit at a desk, or move through your day comfortably, that is a meaningful signal. Pain that is disrupting your function is pain worth addressing. A physiotherapist can help identify contributing factors and work with you to manage them.'
      },
      {
        type: 'heading',
        text: '3. You have had this kind of pain before'
      },
      {
        type: 'paragraph',
        text: 'Recurrent back pain is common. If you have experienced similar episodes in the past, a physiotherapy assessment can help identify patterns that may be contributing to those recurrences. Understanding the underlying factors and building strength and movement capacity is often central to reducing the frequency of future episodes.'
      },
      {
        type: 'heading',
        text: '4. You are modifying your activity to avoid the pain'
      },
      {
        type: 'paragraph',
        text: 'If you have started avoiding exercise, certain movements, or activities you would normally do because of back pain, that is worth paying attention to. Activity avoidance over time can contribute to deconditioning and may compound the problem. A physiotherapist can help you understand what is and is not appropriate to load during your recovery.'
      },
      {
        type: 'heading',
        text: '5. The pain is radiating into your leg or foot'
      },
      {
        type: 'paragraph',
        text: 'Back pain that radiates into the buttock, thigh, calf, or foot may indicate involvement of the nerve structures in the lower back. This presentation warrants a clinical assessment. A physiotherapist can assess the pattern of your symptoms and determine the most appropriate course of management, including whether further investigation or referral is indicated.'
      },
      {
        type: 'heading',
        text: 'A note on red flags'
      },
      {
        type: 'paragraph',
        text: 'There are some symptoms associated with back pain that require prompt medical attention rather than a physiotherapy assessment. These include loss of bladder or bowel control, numbness in the groin or inner thigh, significant unintended weight loss, or back pain following a significant trauma. If you are experiencing any of these, please seek medical attention promptly.'
      },
      {
        type: 'heading',
        text: 'What a physiotherapy assessment involves'
      },
      {
        type: 'paragraph',
        text: 'If you decide to book, your first appointment will involve a thorough discussion of your symptoms, history, and goals, followed by a physical assessment of your movement, strength, and function. From there, your physiotherapist will explain what they found and work with you to develop a management plan suited to your situation.'
      }
    ]
  },
  {
    id: 'dry-needling',
    slug: 'dry-needling-muscle-pain-tightness',
    category: 'Manual Therapy',
    readTime: '5 min',
    title: 'How Dry Needling Can Help With Muscle Pain and Tightness',
    desc: 'Dry needling is a technique used by physiotherapists to help reduce localised muscle pain and tension. Here is what it involves and what you can expect.',
    img: '/articles/dry-needling-insights.webp',
    content: [
      {
        type: 'intro',
        text: 'Dry needling is a technique used by physiotherapists to help reduce localised muscle pain and tension. Here is what it involves, who it may be suited to, and what you can expect during a session.'
      },
      {
        type: 'paragraph',
        text: 'If you have heard the term dry needling and been curious about what it actually involves, you are not alone. It is one of the more commonly asked about techniques in physiotherapy, and there is often some confusion about what it is, what it is not, and who it is appropriate for.'
      },
      {
        type: 'heading',
        text: 'What is dry needling?'
      },
      {
        type: 'paragraph',
        text: 'Dry needling involves inserting fine, sterile filiform needles into specific points within muscle tissue, typically areas known as myofascial trigger points. These are localised areas of muscle that are hyperirritable and often tender to touch. The term "dry" refers to the fact that no substance is injected through the needle. The needle itself is the treatment.'
      },
      {
        type: 'paragraph',
        text: 'Dry needling is different from acupuncture. While both techniques use similar needles, they are based on different principles and are applied with different clinical aims. Dry needling is applied based on musculoskeletal assessment findings and is used to address specific patterns of muscle pain and dysfunction.'
      },
      {
        type: 'heading',
        text: 'What can it help with?'
      },
      {
        type: 'paragraph',
        text: 'Dry needling is used as one technique within a broader physiotherapy treatment plan. It may be used to help reduce localised muscle pain, address trigger point tenderness, and support improved muscle function. At Rehab Factory, dry needling is never used as a standalone treatment. It is applied alongside manual therapy and exercise rehabilitation as part of a comprehensive plan.'
      },
      {
        type: 'paragraph',
        text: 'Common presentations where dry needling may be included as part of a treatment plan include neck and upper back tension, shoulder and rotator cuff conditions, lower back muscle tightness, calf and hip flexor tightness in athletes, and headaches with a musculoskeletal component.'
      },
      {
        type: 'heading',
        text: 'What does it feel like?'
      },
      {
        type: 'paragraph',
        text: 'Most patients feel very little on needle insertion. At the trigger point, you may feel a local twitch response, which is a brief involuntary contraction of the muscle. This can feel like a short, deep ache or a mild cramp sensation. It is typically brief and is often associated with the release of the trigger point.'
      },
      {
        type: 'paragraph',
        text: 'After a session, some patients feel a temporary increase in muscle soreness, similar to the feeling after a hard training session. This generally settles within 24 to 48 hours. Your physiotherapist will let you know what to expect based on your individual response.'
      },
      {
        type: 'heading',
        text: 'Is it suitable for everyone?'
      },
      {
        type: 'paragraph',
        text: 'Dry needling is not appropriate for all patients or all presentations. Your physiotherapist will assess whether it is a suitable option based on your clinical picture, your history, and your preferences. It is always your choice. If you would prefer not to include dry needling in your treatment, there are other manual therapy techniques that can be used instead.'
      },
      {
        type: 'paragraph',
        text: 'Patients who are pregnant, have a needle phobia, are taking blood thinners, or have certain medical conditions may not be suitable candidates. Your physiotherapist will discuss this with you during your assessment.'
      },
      {
        type: 'heading',
        text: 'How does it fit into the Rehab Factory approach?'
      },
      {
        type: 'paragraph',
        text: 'At Rehab Factory, manual therapy techniques including dry needling are used to support the body\'s capacity to engage with exercise rehabilitation. The goal of any hands-on technique we use is to reduce pain and restore movement so that patients can get back to the real work of rebuilding strength and function in the gym.'
      }
    ]
  }
];
