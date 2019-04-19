import VideoListEntry from '../../src/components/VideoListEntry.js';

describe('VideoListEntry', function() {
  var {
    renderIntoDocument,
    findRenderedDOMComponentWithClass
  } = React.addons.TestUtils;

  var cuteCatVideo, superCuteCatVideo, hackReactorVideo;

  // In order to leverage React's test utility function `findRenderedDOMComponentWithClass`
  // for stateless functional components, we must wrap them in a class component
  // Wrapper.jsx defined a Wrapper component to use in our tests.
  // Read more here: https://github.com/facebook/react/issues/4972

  beforeEach(function() {
    cuteCatVideo = renderIntoDocument(
      <Wrapper>
        <VideoListEntry video={window.fakeVideoData[0]} />
      </Wrapper>
    );

    superCuteCatVideo = renderIntoDocument(
      <Wrapper>
        <VideoListEntry video={window.fakeVideoData[1]} />
      </Wrapper>
    );

    hackReactorVideo = renderIntoDocument(
      <Wrapper>
        <VideoListEntry video={window.fakeVideoData[2]} />
      </Wrapper>
    );
  });

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(VideoListEntry)).to.be.false;
  });

  it('should dynamically render a video\'s image', function() {
    var cuteCatVideoImageElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'media-object');
    var superCuteCatVideoImageElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'media-object');
    var hackReactorVideoImageElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'media-object');

    expect(cuteCatVideoImageElement.src).to.equal('http://www.fndvisions.org/img/cutecat.jpg');
    expect(superCuteCatVideoImageElement.src).to.equal('https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg');
    expect(hackReactorVideoImageElement.src).to.equal('https://d3c5s1hmka2e2b.cloudfront.net/uploads/topic/image/14/hack_reactor.png');
  });

  it('should dynamically render a video\'s title', function() {
    var cuteCatVideoTitleElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'video-list-entry-title');
    var superCuteCatVideoTitleElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'video-list-entry-title');
    var hackReactorVideoTitleElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'video-list-entry-title');

    expect(cuteCatVideoTitleElement.innerHTML).to.equal('Cute cat video');
    expect(superCuteCatVideoTitleElement.innerHTML).to.equal('Super cute cat video');
    expect(hackReactorVideoTitleElement.innerHTML).to.equal('Hack Reactor opens extension school on Mars');
  });

  it('should dynamically render a video\'s description', function() {
    var cuteCatVideoDescriptionElement = findRenderedDOMComponentWithClass(cuteCatVideo, 'video-list-entry-detail');
    var superCuteCatVideoDescriptionElement = findRenderedDOMComponentWithClass(superCuteCatVideo, 'video-list-entry-detail');
    var hackReactorVideoDescriptionElement = findRenderedDOMComponentWithClass(hackReactorVideo, 'video-list-entry-detail');

    expect(cuteCatVideoDescriptionElement.innerHTML).to.equal('The best cat video on the internet!');
    expect(superCuteCatVideoDescriptionElement.innerHTML).to.equal('Better than the best cat video on the internet!');
    expect(hackReactorVideoDescriptionElement.innerHTML).to.equal('Watch the ribbon cutting of the first coding bootcamp in space');
  });
});