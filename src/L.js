// Liskov substitution principle

class Compinent { 
  component = true;
}

class CompinentWithTemplate extends Compinent{
  render() {
    return '<div>Compinent</div>';
  }
}

class HigherOrderComponents extends Compinent {

}

class HeaderCompinent extends CompinentWithTemplate {
  onInit() {}
}

class FooterCompinent extends CompinentWithTemplate {
	afterInit() {}
}

class HOC extends HigherOrderComponents {
	render() {
    throw new Error('Method render is imposible here!');
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderComponent(component) {
  console.log(component.render());
}

renderComponent(new HeaderCompinent());
renderComponent(new FooterCompinent());
// renderComponent(new HOC());


