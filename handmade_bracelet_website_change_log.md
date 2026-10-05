# CHANGE LOG — Handmade Bracelet Website Project

## Purpose
This handoff file contains the context needed for a new ChatGPT instance to continue the handmade bracelet website project.

## 1. Project
The user wants a website for a small handmade bracelet business run from home.

Main requirements:
- Product catalogue for handmade bracelets.
- Customers can view products and place orders.
- Owner can see which customer ordered which bracelet(s).
- Cart and checkout.
- Payment gateway.
- Customer order tracking.
- Owner/admin dashboard.
- Responsive website.
- Attractive, modern, Gen-Z-friendly design.
- Strong animations and interactions.
- The site should feel unique, not like a generic Shopify/Amazon-style store.

User is a beginner and prefers simple, step-by-step explanations with exact buttons/panels to click.

## 2. Main creative direction
The website should feel like entering a small digital handmade jewellery studio.

Visual style:
- Cute + handmade + Gen Z + premium.
- Soft pastel backgrounds.
- Rounded cards.
- Handwritten-style headings.
- Hearts, stars, beads, sparkles and small doodles.
- Soft gradients.
- High-quality bracelet photography.
- Lots of whitespace.
- Subtle micro-interactions.
- Avoid overly childish or cluttered design.

The important idea is that animation should be part of the shopping/storytelling experience, not just decoration.

## 3. Signature animation idea
The user came up with a distinctive homepage animation showing the normal bracelet-making process.

Sequence:
1. A single thin bracelet thread/string appears.
2. Realistic 3D beads with holes in the center are added one by one onto the thread.
3. Several beads are added.
4. The beaded thread curves into a bracelet.
5. The two ends meet.
6. A realistic final knot is tied.
7. The finished bracelet is shown.
8. The bracelet is wrapped naturally around a human hand/wrist.

Desired qualities:
- Smooth.
- Realistic/physically believable.
- 3D-looking beads.
- Beads visibly pass through their central holes.
- Natural easing.
- No jitter or sudden movements.
- Soft lighting and shadows.
- Premium handmade-jewellery look.
- Modern Gen-Z aesthetic.
- Subtle sparkle at the completed stage.

The user especially likes the idea of making this animation scroll-controlled:
- Scroll → thread appears.
- Scroll → beads are added one by one.
- Scroll → bracelet forms.
- Scroll → knot is tied.
- Scroll → bracelet goes onto wrist.

Potential hero copy:
“From a tiny thread → to something you can wear. ♡”

## 4. Animation tools discussed
### Rive
Rive is currently the main tool the user is trying.
https://rive.app/editor

Why:
- Timeline animation.
- State machines.
- Interactive animation.
- Can potentially respond to scrolling/clicks/hover.
- Can be integrated into a website.

### Lottie / LottieFiles
Also discussed as an option for web animations.
Useful for:
- Lottie JSON / .lottie animation assets.
- Website embeds.
- Standard web animation.

### AI coding tools
Discussed:
- Codex
- Cursor
- Windsurf
- Replit
- Claude Code
- GitHub Copilot

Concept:
Rive/Lottie = animation asset.
Codex/Cursor/etc. = website code and integration.
VS Code = development environment.

## 5. Current Rive state
The user opened Rive at:
https://editor.rive.app/file/untitled/2596306

Screenshot showed:
- Rive editor.
- Beta version 0.8.5879.
- File name: Untitled.
- Artboard: Desktop - 1.
- Hierarchy:
  Desktop - 1
    └── BraceletAnimation
- Animations visible in lower-left:
  - WearBraceletAnim
  - BraceletStateMachine
  - AddBeadsAnim (Default)
  - ThreadLiftAnim
- ThreadLiftAnim is selected.
- Timeline is visible at bottom-middle.
- Timeline appeared to have no obvious keyframes yet.

The user said:
“where?....pls help im a begineer”

Previous instructions:
1. Expand BraceletAnimation in the Hierarchy.
2. Find the thread object.
3. Select the thread.
4. Use its properties on the right side, such as Position.
5. At 0 seconds, place the thread at its starting position.
6. Click the small diamond next to Position to create a keyframe.
7. Move the playhead to around 1 second.
8. Move the thread upward.
9. Create/update the second keyframe.
10. Press Play in the timeline to preview.

IMPORTANT: The exact object names inside BraceletAnimation were not visible. Do not guess them. If needed, ask the user to expand BraceletAnimation and send a screenshot.

## 6. Immediate next task
Do NOT jump directly into complicated state machines.

First:
- Help the beginner create one simple thread movement in ThreadLiftAnim.
- Confirm it plays.
- Then animate beads.
- Then animate bracelet formation.
- Then animate the knot.
- Then animate the bracelet wrapping around a wrist.
- Finally make it interactive/scroll-controlled and integrate it into the website.

Use exact click-by-click instructions and screenshots when helpful.

## 7. Website pages
### Customer side
HOME
- Hero.
- Bracelet-making animation.
- “Pick Your Vibe”.
- Featured bracelets.
- “Build Your Own Bracelet”.
- Handmade story.
- CTA.

SHOP / COLLECTIONS
- All bracelets.
- Bestsellers.
- New arrivals.
- Custom.
- Filters by style, color, price.

PRODUCT DETAILS
- Product images.
- Name.
- Price.
- Description.
- Materials.
- Size.
- Care instructions.
- Shipping information.
- Quantity.
- Add to cart.
- Related products.

CART
- Products.
- Quantity controls.
- Remove.
- Subtotal.
- Shipping.
- Total.
- Checkout.

CHECKOUT
- Customer contact.
- Address.
- Order summary.
- Payment.
- UPI should be prominent for an Indian customer base, along with other supported gateway methods.

ORDER SUCCESS
- Order number.
- Products.
- Total.
- Delivery estimate.
- Track order.

ORDER TRACKING
- Ordered.
- Making.
- Packed.
- Shipped.
- Delivered.

MY SPACE
- Orders.
- Wishlist.
- Profile.
- Addresses.

ABOUT
- Personal handmade-business story.
- Workspace/process photos.
- “From my hands → to your wrist.”

BEHIND THE BEADS / JOURNAL
- Making process.
- Bead selection.
- Packaging.
- Studio moments.

CUSTOM ORDER
- Customer name.
- Desired design.
- Color.
- Charm.
- Budget.
- Inspiration upload.
- Submit request.

## 8. Admin dashboard
Owner/admin needs:

### Dashboard
- Total orders.
- Sales/revenue.
- Products.
- Low stock.
- Sales overview.
- Bestsellers.
- Recent orders.

### Orders
Show:
- Order ID.
- Customer.
- Contact.
- Bracelet(s).
- Quantity.
- Price.
- Total.
- Payment status.
- Delivery/order status.

Allow:
- Mark as Packed.
- Mark as Shipped.
- Mark as Delivered.

### Products
Allow:
- Add product.
- Upload images.
- Set name.
- Price.
- Stock.
- Description.
- Mark new.
- Mark bestseller.
- Hide.
- Delete.

### Inventory
- Stock levels.
- Low-stock alerts.

### Customers
- Customer/order history as appropriate.

### Custom Requests
- View custom bracelet requests.

### Payments
- Payment/order status.

### Analytics
- Sales.
- Orders.
- Revenue.
- Popular products.
- New customers.
- Low stock.

## 9. Unique interaction ideas
Possible micro-interactions:
- Floating beads.
- Bracelet cards lift/rotate on hover.
- Sparkles.
- Heart/wishlist animation.
- Add-to-cart bracelet flies toward cart.
- Charm-based page transitions.
- Subtle custom cursor.
- Scroll-controlled bracelet-making sequence.

Keep animations smooth and tasteful so performance remains good.

## 10. “Pick Your Vibe”
Possible categories:
- Cute 🎀
- Beachy 🌊
- Mystic 🌙
- Romantic 💗
- Fun 🦋
- Dreamy ☁

Clicking a vibe can filter/change the displayed bracelet collection.

## 11. “Build Your Bracelet”
Possible future feature:
1. Choose thread/base color.
2. Choose beads.
3. Choose charms.
4. Choose style.
5. Preview bracelet.
6. Add to cart.

Possible styles:
- Cute
- Minimal
- Y2K
- Romantic
- Dark
- Nature

## 12. Visual mockup direction
A previous generated mockup explored a pastel scrapbook-style website:
- Example brand name “Threaded ♡”.
- Hero: “tiny threads, big stories ♡”.
- Section called “Watch the magic unfold”.
- Four stages:
  1. Thread
  2. Add beads
  3. Tie knot
  4. Your bracelet
- Shop.
- Product page.
- Cart.
- About.
- My Space.
- Checkout.
- Cute doodles/pastel visuals.

This is only inspiration. The user specifically wants something more unique than currently available generic jewellery websites.

## 13. Beginner communication requirements
The user is a beginner.
When helping:
- Explain in simple language.
- Tell them exactly what to click.
- Refer to visible UI panels.
- Avoid unexplained technical terms.
- If something is not visible, ask for a screenshot.
- Do not assume they know Rive concepts such as artboards, keyframes, bones, constraints, state machines, or runtimes.
- Give a few steps at a time when the interface is complicated.

## 14. Previously prepared animation prompt
The user may want to reuse this prompt in an animation generator:

“Create a smooth, aesthetically pleasing 3D animation showing the complete handmade bracelet-making process from start to finish.

Scene 1 — The Thread:
Start with a single thin, flexible bracelet thread/string lying naturally in the center of the frame. The thread should be realistic, slightly textured, and gently curved. Slowly lift and straighten the thread so the viewer clearly understands that this is the starting material.

Scene 2 — Adding the Beads:
Show realistic 3D colorful beads with clearly visible circular holes through their centers. One bead at a time, each bead should smoothly slide onto the thread through its central hole. Make the movement physically believable: the bead approaches the end of the thread, passes through the thread, and gently moves along it into position. Continue adding several beads one by one, with different attractive colors and shapes. The beads should have a glossy handmade-jewelry appearance and subtle reflections.

Scene 3 — Creating the Bracelet:
After enough beads have been added, show the complete beaded thread being gently curved into a circular bracelet shape. The two ends of the thread should naturally move toward each other.

Scene 4 — Tying the Knot:
Show a close-up of the two thread ends. They should cross over each other and form a small, realistic knot. Animate the knot being tightened smoothly and naturally. The final knot should secure all the beads together without looking rushed or mechanically generated.

Scene 5 — Finished Bracelet:
Once the knot is complete, transition smoothly to the finished bracelet. Give it a subtle satisfying bounce/rotation to highlight the completed handmade product. Add a few delicate sparkles around it.

Scene 6 — Bracelet on a Hand:
Finally, smoothly transition to a realistic human hand/wrist. The finished bracelet gently wraps around the wrist and settles naturally against the skin. Show the bracelet from a beautiful close-up angle, highlighting the colorful beads, thread, and handmade details.

STYLE:
Premium handmade jewelry aesthetic, soft pastel background, warm natural lighting, realistic 3D materials, glossy beads, soft shadows, elegant composition, minimal and clean environment, cozy handmade feeling, modern Gen-Z aesthetic.

ANIMATION:
Very smooth motion, realistic physics, natural easing, seamless transitions between every stage, no sudden movements, no jitter, no unnatural deformation. The bead movement should clearly show the beads passing through the holes in the thread. The knot should look physically believable. Use slow, graceful camera movements and subtle depth of field.

IMPORTANT:
The bracelet-making process must be clearly understandable at every stage:
THREAD → BEADS ADDED ONE BY ONE → BRACELET SHAPE → KNOT TIED → FINISHED BRACELET → BRACELET WORN ON WRIST.

Make the animation feel like a magical transformation from a simple piece of thread into a beautiful handmade bracelet.”

## 15. Overall final vision
The final website should feel like:
“A tiny handmade bracelet studio brought to life on the web.”

Signature journey:
THREAD → BEADS → KNOT → BRACELET → WRIST → SHOP

The most important unique feature currently being developed is the bracelet-making animation.
