// Single Responsibility Principle

class Story {
	title: string;
	text: string;
	modified: boolean;

	constructor(title: string, text: string) {
		this.title = title;
		this.text = text;
		this.modified = false;
	}

	update(text: string) {
		this.text = text;
		this.modified = true;
	}
}

class StoryPublisher {
	story: Story;

	constructor(story: Story) {
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
		return JSON.stringify(
			{
				title: this.story.title,
				text: this.story.text,
				modified: this.story.modified,
			},
			null,
			2
		);
	}

	xml() {
		return `
      <article>
          <header>${this.story.title}</header>
          <content>${this.story.text}</content>
      </article>
    `;
	}
}

const story = new StoryPublisher(new Story('Solid', 'The single-responsibility principle (SRP)'));

console.log(story.html());
console.log(story.json());
