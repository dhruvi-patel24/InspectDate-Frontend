import React, { useState } from 'react';
import '../../styles/common.scss';
import './ContactSupport.scss';

const ContactSupport = () => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const isDisabled = !topic || !message.trim();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with API call later
    console.log({
      topic,
      message,
    });

    alert('Message sent to InspectDate Admin');
    setTopic('');
    setMessage('');
  };

  return (
    <div className="projects-container">
      <div className="card contact-support-card">
        <div className="card-header">
          <h3 className="card-title">Contact InspectDate</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Topic */}
            <div className="form-group">
              <label className="form-label">Topic</label>
              <select
                className="form-control"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">Select Topic</option>
                <option value="Support Issue">Support Issue</option>
                <option value="New Feature Request">New Feature Request</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group mb-0">
              <label className="form-label">Comment</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Actions */}
            <div className="form-actions">
              <button
                type="button"
                className="btn btn-rounded btn-light"
                onClick={() => {
                  setTopic('');
                  setMessage('');
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-rounded btn-secondary"
                disabled={isDisabled}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
