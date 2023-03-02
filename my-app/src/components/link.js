export default function Link({url, linkText}){
    return (
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
    );
}