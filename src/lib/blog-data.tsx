import type { ReactNode } from 'react'
import Image from 'next/image'
import BlogImage from '../components/BlogImage'

export interface BlogPost {
    slug: string
    title: string
    date: string
    readingTime: string
    image: string
    excerpt: string
    content: ReactNode
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'how-to-ask-for-prayer',
        title: 'How to Ask for Prayer (and Get It)',
        date: 'December 21, 2025',
        readingTime: '4 min read',
        image: '/img/blog-asking-prayer.png', // New abstract image
        excerpt: 'Sharing your struggles can be hard. Here is how to create a prayer request that lets people support you, whether you need anonymity or specific denominational support.',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    We all face seasons where we need extra support. Maybe it's a health crisis, a job loss, or just an overwhelming sense of anxiety. You know you need prayer, but asking for it feels vulnerable.
                </p>

                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                    "What if people judge me?" "What if I share too much?" These are valid fears. But the body of Christ is designed to bear one another's burdens. The key is asking in a way that feels safe and authentic to you.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-12 text-gray-900">Be Honest and Vulnerable</h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    First, remember that you don't need to have "perfect" words. God hears your heart. When asking others for prayer, it helps to be honest about what you are feeling. You don't have to share every detail if you aren't comfortable, but sharing the core emotion helps others intercede for you effectively.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Instead of just saying "pray for my situation," try sharing "I am feeling overwhelmed and anxious about a decision at work." This small shift invites people into your emotional reality and allows them to pray with greater empathy and specific intent. Vulnerability breeds connection.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Start Small</h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    It can be daunting to broadcast your deepest struggles to the world. That is completely normal. If you are new to asking for prayer, start with a trusted friend, a mentor, or a small group.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    You might simply say, "I'm having a hard week, could you keep me in your thoughts?" As you experience the comfort of being held in prayer, you will likely feel more safe to open up further. Trust is built over time, and every prayer request is a step of faith.
                </p>

                <h3 className="text-2xl font-bold mb-6 mt-12 text-gray-900">How Pray4Me Can Help</h3>

                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Pray4Me was built to make asking for prayer easier and more effective, giving you tools to control how much you share and who sees it.
                </p>

                <h4 className="text-xl font-bold mb-2 mt-8 text-gray-900">1. Anonymous Mode</h4>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Sometimes the heaviest burdens are the ones we aren't ready to attach our face to yet. Toggle <strong>Anonymous Mode</strong> to hide your name and photo while still receiving the spiritual support you need.
                </p>

                <h4 className="text-xl font-bold mb-2 mt-8 text-gray-900">2. Denomination Filters</h4>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Prayer traditions vary. Set a <strong>Denomination</strong> preference to ensure your request resonates with believers who pray in a way that aligns with your faith tradition.
                </p>

                <h4 className="text-xl font-bold mb-2 mt-8 text-gray-900">3. Boost for Critical Needs</h4>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    For urgent moments—a surgery, a crisis—use the <strong>Boost</strong> feature to push your request to the top of the feed and rally the community immediately.
                </p>

                <div style={{ maxWidth: '450px', margin: '0 auto' }}>
                    <BlogImage
                        src="/img/pleasePrayForMe.png"
                        alt="Pray4Me features: Anonymous, Denomination, Boost"
                        width={800}
                        height={450}
                        caption="Easily toggle between features when creating a request."
                        className="w-full"
                    />
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-12 text-gray-900">Write Your Request Today</h3>
                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                    Don't carry it alone. Brief or detailed, anonymous or public—just let people know how to lift you up. You'll be surprised at how many strangers are ready to stand with you in faith.
                </p>
            </>
        ),
    },
    {
        slug: 'how-to-pray-for-someone',
        title: 'How to Pray for Someone: A Simple Guide',
        date: 'December 20, 2025',
        readingTime: '5 min read',
        image: '/img/blog-prayer-hands.png', // We will copy the generated image to this path
        excerpt: 'Prayer is one of the most powerful ways to love others. Learn how to pray effectively for friends, family, and even strangers.',
        content: (
            <>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    We’ve all been there. A friend shares they’re going through a tough time, or you see a request from a stranger online, and you want to help. You say, "I'll pray for you." But when you actually sit down to do it, you might find yourself stuck. What do I say? How do I start?
                </p>

                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                    Prayer doesn't have to be complicated or full of "thees" and "thous." At its core, intercessory prayer—praying for others—is simply bringing someone else's needs before God. It's an act of love and faith. Here is a simple guide to help you pray for someone effectively.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-12 text-gray-900">1. Start with Thanksgiving</h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Before diving into requests, take a moment to thank God for the person you are praying for. Acknowledge their value and the role they play in your life or the world.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-gray-600">
                    "Father, thank you for [Name]. Thank you for their life and for how much You love them."
                </blockquote>

                <h3 className="text-2xl font-bold mb-4 mt-12 text-gray-900">2. Pray for Their Specific Needs</h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    If you know what they are struggling with, bring it up specifically. Whether it's health, finances, relationships, or mental peace, be direct. God knows what they need, but He invites us to ask.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li><strong>For Healing:</strong> Ask for physical restoration and strength.</li>
                    <li><strong>For Peace:</strong> Pray against anxiety and fear.</li>
                    <li><strong>For Wisdom:</strong> Ask for guidance in difficult decisions.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 mt-12 text-gray-900">3. Pray Scripture Over Them</h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    One of the most powerful ways to pray is to use the Bible itself. When you run out of your own words, borrow God's.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    For example, you can pray <em>Numbers 6:24-26</em>:
                    <br />
                    "Lord, bless [Name] and keep them; make Your face shine on them and be gracious to them; turn Your face toward them and give them peace."
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-12 text-gray-900">4. Listen</h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Prayer is a conversation. After you've spoken, take a moment of silence. Sometimes, God might bring a scripture, a word of encouragement, or a specific action to mind that you can do to help that person practically.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-12 text-gray-900">5. Let Them Know</h3>
                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                    Finally, tell them you prayed! It can be incredibly encouraging to know that someone took the time to bring your name before God. Send a text, give them a call, or use an app like <strong>Pray4Me</strong> to let them know they are not alone.
                </p>

                <div className="bg-tertiary/50 p-6 rounded-2xl mb-8">
                    <p className="text-lg font-medium text-secondary">
                        <strong>Remember:</strong> You don't need perfect words. You just need a willing heart.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-12 text-gray-900">Start Praying Today</h3>
                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                    If you're looking for an easy place to start praying for others who truly need it, <strong>Pray4Me</strong> connects you with people around the world sharing their requests. It’s a simple, distraction-free way to make prayer a daily habit and lift up strangers in faith.
                </p>
            </>
        ),
    },
]
