# Product Requirements Document (PRD)

## Product Name:
**"FriendZone" – AI-Powered Relationship Support Chatroom**

## Objective:
Provide immediate, anonymous relationship support through engaging, AI-powered, real-time interactions using personas closely inspired by the iconic characters of "Friends."

## Target Audience:
Individuals seeking immediate, casual support for relationship issues.

## Platform:
- Mobile app (iOS and Android)
- Standalone application with no initial third-party integrations

## User Experience:
### Interaction Format:
- Real-time synchronous chatroom
- Typical session duration: 5-10 minutes

### Characters:
- **Ross:** Analytical, sensitive, slightly neurotic
- **Rachel:** Empathetic, fashionable, emotional
- **Chandler:** Humorous, sarcastic, supportive via humor
- **Monica:** Organized, assertive, problem-solver
- **Joey:** Warm-hearted, simple, supportive and encouraging
- **Phoebe:** Optimistic, quirky, offers creative and unconventional advice

Each persona dynamically adapts responses to user input, maintaining iconic characteristics to provide engaging yet supportive interactions.

## AI Integration:
- Utilize OpenAI’s GPT models for real-time, dynamic dialogue generation
- Adapt responses based on individual user scenarios for a personalized experience

## Privacy & Data Management:
- Users join anonymously (no account creation)
- No data retention beyond the live session
- Ensure GDPR and CCPA compliance by not storing personal data

## Crisis Management:
- AI trained to detect crisis indicators (severe mental health issues, abuse, threats)
- Immediate referral to professional support resources displayed prominently when crisis indicators are detected

## Moderation:
- No active moderation planned initially
- Passive AI-based keyword filtering to manage extreme crisis detection only

## Monetization:
- Free service, no initial monetization

## Key Performance Indicators (KPIs):
- User satisfaction ratings post-chat (simple emoji-based feedback)

## Core Features:
1. **Chatroom Interface:**
   - Simple, intuitive design emulating familiar chat interfaces
   - Users can interact simultaneously with all six personas or selectively choose personas

2. **Persona Profiles:**
   - Brief bios visible to users, establishing personalities clearly at session start

3. **Crisis Detection & Referral:**
   - Real-time AI monitoring with instant support referral pop-ups when high-risk situations identified

4. **Feedback Mechanism:**
   - Simple satisfaction feedback collected after each session (thumbs-up/down or emoji selection)

## Technical Requirements:
- React Native or Flutter for cross-platform app development
- Integration with OpenAI API for conversation handling
- Backend infrastructure optimized for minimal data storage, real-time processing, and anonymous sessions

## Constraints:
- Initially English-only
- Sessions capped at 10 minutes for efficiency and to manage resource usage

## Future Roadmap (Post MVP):
- Optional user account creation for personalized long-term support
- Analytics dashboard for aggregate anonymous insights on relationship challenges
- Integration with external platforms or messaging services (WhatsApp, Messenger)

## Success Criteria:
- High user satisfaction scores (aim for 80% positive feedback)
- Clear evidence of crisis detection effectiveness (positive identification and referrals)
- Consistent engagement and frequent returns from initial users
