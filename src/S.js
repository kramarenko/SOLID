// Single Responsibility Principle

class Story {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = test;
    this.modified = true;
  }
}

class StoryPrinter {
	constructor(story) {
		this.story = story;
	}

	html() {
		return `
      <article class="story">
          <h2>${this.story.title}</h2>
          <p>${this.story.text}</p>
      </article>
    `;
	}

	json() {
    return JSON.stringify({
			title: this.story.title,
			text: this.story.text,
			modified: this.story.modified,
		}, null, 2);
	}
}

const story = new StoryPrinter(
  new Story('Solid', 'The single-responsibility principle (SRP)')
);

console.log(story.html());
console.log(story.json());
