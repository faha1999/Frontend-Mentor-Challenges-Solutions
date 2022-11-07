import { useEffect, useState } from 'react';

const getLocalStorage = () => {
  let links = localStorage.getItem('links');

  if (links) {
    return JSON.parse(localStorage.getItem('links'));
  } else {
    return [];
  }
};

export const ShortenLink = () => {
  const [text, setText] = useState('');
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState('Copy');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Input is empty');
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();
        console.log(data.result);
        setLinks(data.result);
        setText('');
      };

      shortenLink();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonText('Copied!');
  };

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  return (
    <>
      <div className="shorten">
        <div className="container">
          <form className="card-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-12 col-md-9 col-lg-10">
                <input
                  type="url"
                  placeholder="Shorten a link here"
                  className="form-control"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              <div className="col-sm-12 col-md-3 col-lg-2">
                <button
                  type="submit"
                  className="btn btn-info d-block w-100"
                  onClick={handleSubmit}
                >
                  Shorten It!
                </button>
              </div>
            </div>
          </form>

          <div className="card card-link border-0">
            <div className="card-header">
              <p>{links.original_link}</p>
            </div>

            <div className="card-body">
              <p className="text-info me-0 me-sm-4">{links.full_short_link}</p>

              <button onClick={handleCopy} className="btn btn-info">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
