# AI collaboration summary

**Student name:** Mrudula Murari

**Assignment:** Custom Cow

**Time to complete:** ~10 minutes

---

## 1. A decision you made

Pick ONE decision from this assignment — schema design, upgrade choice, how you handled an error, anything.

**What was the decision?**

One of the decisions I made was how to design the structure of my fortunes. I decided the fortunes would have 3 categories each: text, category and mood. 

**What alternatives did you consider?**

I initially thought of storing the fortunes as strings, because it would've been easier. I then reviewed some schema examples and discussed my options with AI, and saw that using objects would allow for more flexibility.
---

## 2. AI as thinking partner

Describe a moment where AI helped you think differently — not just wrote code for you.


**What happened?**

AI helped me brainstorm on how to structure my JSON. It helped me come up with the categories, which made the program more interactive. It also helped me plan steps to update fortune.js so it could read fortunes from the JSON file. 

---

## 3. Getting unstuck

Something didn't work at some point. How did you figure it out?

**What broke?**

My program stopped running because Node.js had an error when it came to importing the JSON file. It said that the JSON module needed an import attribute.

**Your debugging process:**

I looked through the error message, and with AI I changed the import statement to use the right syntax. After updating it, the program worked as I expected.

---

## 4. What surprised you

What did you learn that you didn't expect? Or what was harder/easier than you anticipated?

I was surprised at how useful JSON schema validation is. When I connected the schema, it showed errors if something in the JSON file did not match the structure. It helped me catch mistakes early.

---

## Optional

**Approximate time spent:** Session 1: 2 hours
                            Session 2: 1.25 hours

**Upgrade you chose:** Category-based cow selection depending on fortune category.
