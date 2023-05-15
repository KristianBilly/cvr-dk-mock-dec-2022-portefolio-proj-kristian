export const Form = ({ onClick, btnText, children }) => (
  <form className='form-container'>
    <div className='form-control'>
      {children}
      <button className='submit-btn' type='submit' onClick={onClick}>
        {btnText}
      </button>
    </div>
  </form>
)
