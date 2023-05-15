export const Modal = ({
  title,
  subtitle,
  listOne,
  listTwo,
  isModalVisible,
  onYes,
  onNo,
}) =>
  isModalVisible ? (
    <div className='modal'>
      <div className='modal-overlay'>
        <div className='modal-container'>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          {listOne && <li>{listOne}</li>}
          {listTwo && <li>{listTwo}</li>}
          <div className='btn-container'>
            <button className='modal-btn' onClick={onYes}>
              Yes
            </button>
            <button className='modal-btn' onClick={onNo}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null
