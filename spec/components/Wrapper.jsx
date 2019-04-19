class Wrapper extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

window.Wrapper = Wrapper;
