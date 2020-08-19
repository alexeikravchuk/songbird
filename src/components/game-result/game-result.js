import React from 'react';
import './game-result.scss';

export const GameResult = ({ score, resetGame }) => {
  const maxScore = 30;

  return (
    <div className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title text-success">Поздравляем!</h2>
          </div>
          <div className="modal-body">
            <p className="text-center">{`Вы прошли викторину и набрали ${score} баллов из ${maxScore}`}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-lg btn-block btn-success" onClick={resetGame}>
              Попробовать еще раз
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
