import "./InviteForm.css";

export const InviteForm = () => {
  const handleFormSubmission = (formData: FormData, isComing: boolean) => {
    console.log(formData.get("firstName"), formData.get("lastName"), isComing);
    fetch("http://localhost:3000");
  };

  return (
    <div className='form-container'>
      <h3 className='form-title'>Form Title</h3>
      <form className='invite-form flex-col'>
        <div className='controls flex-row'>
          <div className='flex-col control'>
            <label htmlFor='first-name'>First Name</label>
            <input required type='text' name='firstName' id='first-name' />
          </div>

          <div className='flex-col control'>
            <label htmlFor='first-name'>Last Name</label>
            <input type='text' name='lastName' id='first-name' />
          </div>
        </div>

        <div className='controls flex-row end-buttons'>
          <button
            className='custom-button primary-button'
            type='submit'
            formAction={(formData) => handleFormSubmission(formData, true)}
            aria-description='submit that you will arrive to friendmas'
          >
            Going!
          </button>

          <button
            className='custom-button'
            type='button'
            formAction={(formData) => handleFormSubmission(formData, true)}
            aria-description='gag button'
          >
            Unable to go
          </button>
        </div>
      </form>
    </div>
  );
};
