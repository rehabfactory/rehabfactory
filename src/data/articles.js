import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';

export const articles = [
  {
    id: 'first-appointment',
    slug: 'first-physiotherapy-appointment',
    category: 'Getting Started',
    readTime: '4 min',
    title: 'What to expect at your first physiotherapy appointment',
    desc: 'The initial appointment is about getting to know each other and establishing a path to recovery.',
    img: '/articles/your-first-appointment.webp',
    content: [
      {
        type: 'intro',
        text: 'The initial appointment is about getting to know each other. Like all relationships, the quality of a client-clinician relationship is dependent on how well they can work together. While we examine your condition clinically, we also pay close attention to your personality, your goals, your understanding and expectation of what physiotherapy is.'
      },
      {
        type: 'heading',
        text: 'Searching for rapport'
      },
      {
        type: 'paragraph',
        text: 'We do not wish to sell you aimless and continuous temporary relief convincing you that a set number of sessions will get you right. We are genuine about what we do and just like you, we would like to know whether we are the right fit.'
      },
      {
        type: 'heading',
        text: 'Assessment and discussion'
      },
      {
        type: 'paragraph',
        text: 'This is when we delve deep into your injury. How, when and why did it happen, as well as a detailed history to give us a good understanding of you to guide patient-centred care. Then we assess your body. What separates us is that we get you involved from the get go. We explain everything as we believe this will get you more invested into your rehabilitation.'
      },
      {
        type: 'heading',
        text: 'Exploring goals and management plans together'
      },
      {
        type: 'paragraph',
        text: 'Once we have a better understanding of your condition, we will explore treatment options in line with the goals you want to achieve. This is an active process that both you and our clinician will discuss and negotiate so that we can come up with shared goals to work towards. Expect a detailed follow up plan from us depicting the journey of your rehabilitation with purposely structured checkpoints to ensure you are on track.'
      },
      {
        type: 'heading',
        text: 'Our expectations from you'
      },
      {
        type: 'paragraph',
        text: 'Come in with a ready to work attitude and a comfortable outfit to go with it!'
      },
      {
        type: 'heading',
        text: 'One more thing'
      },
      {
        type: 'paragraph',
        text: 'Your first appointment is not just for us to assess you. It is for you to assess us. We want you to feel confident that our approach meets your needs. If you have questions at any point, ask them. The more we understand each other from the start, the better your program and journey will be.'
      }
    ]
  },
  {
    id: 'manual-therapy',
    slug: 'our-take-on-manual-therapy',
    category: 'Manual Therapy',
    readTime: '6 min',
    title: 'Our take on manual therapy - backed by science of course!',
    desc: 'Manual therapy is a hands-on physical treatment where licensed therapists manipulate, mobilise, and massage muscles and joints.',
    img: '/articles/dry-needling-insights.webp',
    content: [
      {
        type: 'intro',
        text: 'Manual therapy is a hands-on physical treatment where licensed therapists manipulate, mobilise, and massage muscles and joints.'
      },
      {
        type: 'heading',
        text: 'What does manual therapy involve?'
      },
      {
        type: 'paragraph',
        text: 'Our most commonly used techniques are:'
      },
      {
        type: 'list',
        items: [
          'Dry needling',
          'Massage',
          'Mobilisation'
        ]
      },
      {
        type: 'heading',
        text: 'Dry Needling'
      },
      {
        type: 'paragraph',
        text: 'Dry needling involves inserting fine, sterile filiform needles into specific points within muscle tissue, typically areas known as myofascial trigger points. They are so fine you may not even feel them going in. These are localised areas of muscle that are hyperirritable and often tender to touch. The term "dry" refers to the fact that no substance is injected through the needle. The needle itself is the treatment.'
      },
      {
        type: 'paragraph',
        text: 'Dry needling is different from acupuncture. While both techniques use similar needles, they are based on different principles and are applied with different clinical aims. Dry needling is applied based on musculoskeletal assessment findings and is used to address specific patterns of muscle pain and dysfunction.'
      },
      {
        type: 'paragraph',
        text: '*Please note that dry needling is not for you if you are on blood thinners, pregnant or suffer from epilepsy/seizures. For more information reach out to us and we can guide you further.'
      },
      {
        type: 'heading',
        text: 'Massage'
      },
      {
        type: 'paragraph',
        text: 'Massage involves soft and deep tissue gliding strokes of muscles with high tone. The aim is to reduce sensitisation and spasm to prevent over activity of muscles.'
      },
      {
        type: 'heading',
        text: 'Mobilisation and Manipulation'
      },
      {
        type: 'paragraph',
        text: 'Joint mobilisations and manipulations are often used to improve movement in stiff joints. While “popping” and “cracking” noises sound relieving, this treatment modality is just as effective with no noise. Mobilisation and manipulation are generally safe for most people, please reach out to us to find out if you are a suitable candidate for them.'
      },
      {
        type: 'heading',
        text: 'Benefits'
      },
      {
        type: 'list',
        items: [
          'Desensitises some degree of pain',
          'Allows for improved muscle activation',
          'Allows for increased range of motion',
          'Strengthens client-clinician relationship'
        ]
      },
      {
        type: 'heading',
        text: 'When to use'
      },
      {
        type: 'paragraph',
        text: 'Manual therapy is a powerful tool when utilised correctly. Evidence is most consistent with a combination of manual therapy and exercise rehabilitation. Manual therapy is particularly useful in the early stages of rehabilitation, when you are too sore to move. We use it to get you moving, but once you get momentum we want your muscles to do the hard work. That is how we achieve long-term benefits.'
      },
      {
        type: 'heading',
        text: 'Misconceptions - Manual therapy:'
      },
      {
        type: 'list',
        items: [
          'Puts the spine back in place',
          'Realigns your joints',
          'Flushes out bodily toxins',
          'Increases blood flow to the injury site, to speed up recovery',
          'No pain, no gain / If it hurts, it’s working',
          'Gets rid of your chronic knot',
          'Bi-weekly massage is necessary for maintenance'
        ]
      },
      {
        type: 'heading',
        text: 'How does it fit into the RFP approach?'
      },
      {
        type: 'paragraph',
        text: 'We support some use of manual therapy in our treatment plan as a kick-start. However, we warn our patients from becoming overly dependent on it as it only has short-term effects and may subconsciously lead to passively waiting for the injury to resolve. It is in your best interest to take an active role in your rehabilitation. We will equip you with the knowledge, tools and programs to get you on track, but we need YOU to take responsibility for your own progress.'
      }
    ]
  },
  {
    id: 'tendon-rehabilitation',
    slug: 'five-signs-your-tendons-need-rehabilitation',
    category: 'Injury and Pain',
    readTime: '5 min',
    title: 'Five signs your tendons need rehabilitation',
    desc: 'Tendon injuries are common in sports at all levels. Here are five signs that your tendons need some love.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    content: [
      {
        type: 'intro',
        text: 'If you play sports, chances are you would have dealt with tendon injuries at some point. They are common in sports that involve lots of high intensity running and jumping. Despite their seriousness, they often do not receive the attention they deserve as most people will play through the pain. Here are five signs that your tendons need some love.'
      },
      {
        type: 'paragraph',
        text: 'Tendon injuries are common in sports at all levels. Some are minor flare ups which tend to settle with some rest. But if you have suffered from chronic tendon issues, you know very well that no matter how much you rest, it comes back as soon as you play sports again.'
      },
      {
        type: 'paragraph',
        text: 'Knowing when to seek help can make a significant difference to your tendon health. It will not only reduce risk of exacerbation, but it will elevate your performance as well.'
      },
      {
        type: 'heading',
        text: '1. Your pain is load related'
      },
      {
        type: 'paragraph',
        text: 'True tendon pain is always load related. The more intensely and frequently you play, the worse the pain. Additionally, once you rest, the pain subsides. Having said that, we know you love your sport, and a bit of pain will not convince you to sit out for the rest of your season. That is why our tendon rehabilitation program is designed to keep you active as we strengthen the tendon.'
      },
      {
        type: 'heading',
        text: '2. You can pinpoint where it hurts'
      },
      {
        type: 'paragraph',
        text: 'Can you point exactly to where the pain is? Is it always the same spot? Tendon pain is usually localised, meaning the pain does not spread out. It occurs on either end of the tendon - the side that attaches to the muscle, or the side that inserts into the bone. Both can be tricky to manage.'
      },
      {
        type: 'heading',
        text: '3. Your pain is worst in the morning'
      },
      {
        type: 'paragraph',
        text: 'Inflammation is a key characteristic of tendon pathologies, especially when you have played the day before. Hence, it should be of no surprise that the first step you take when you get out of bed is often the most difficult one.'
      },
      {
        type: 'heading',
        text: '4. Rest is not the solution'
      },
      {
        type: 'paragraph',
        text: 'Have you tried resting for a few weeks or even months only to find yourself exactly where you were. Same pain, same spot, same frustration. Unfortunately rest is not the solution. But do not worry, we will help with pain management and prevent you from missing out on your sport.'
      },
      {
        type: 'heading',
        text: '5. You do not feel as athletic when you play'
      },
      {
        type: 'paragraph',
        text: 'Maximum effort sprinting, jumping and change of direction are all highly intense movements that place lots of load on the tendons. If you are dealing with tendon pathology, your brain will activate its defensive mode, alerting your body to inhibit your muscles, affecting your performance in sports.'
      },
      {
        type: 'heading',
        text: 'A note on isometric exercises'
      },
      {
        type: 'paragraph',
        text: 'Isometric exercises refer to exercises where the length of your muscle does not change. This can be performed by holding a heavy weight at a specific angle, or by trying to move an immovable object. Both are highly effective in reducing tendon pain. However, this is only the first step of your road to recovery. That is not enough in preparing you for your sport.'
      },
      {
        type: 'heading',
        text: 'What a physiotherapy management involves'
      },
      {
        type: 'paragraph',
        text: 'If the above signs seem relatable, you can probably use our help. Our tendon rehabilitation programs are specific to you. We take into consideration your age, level of athleticism and history of injuries for a holistic approach. Although managing your pain is a great achievement, we do not stop there. Our tendon programs are designed to get you more athletic than ever. Reach out to us and see if we can help.'
      }
    ]
  }
];

