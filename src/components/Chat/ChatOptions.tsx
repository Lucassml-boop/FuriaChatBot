import React from 'react';

interface ChatOptionsProps {
  onSelect: (option: string) => void;
}

const ChatOptions: React.FC<ChatOptionsProps> = ({ onSelect }) => {
  return (
    <div className="chat_options">
      <p className="chat_bot">
        Escolha uma das opções abaixo:
      </p>
      <ul>
        <li><button onClick={() => onSelect('1')}>1. Jogadores do time</button></li>
        <li><button onClick={() => onSelect('2')}>2. Próximos jogos</button></li>
        <li><button onClick={() => onSelect('3')}>3. Vezes que foi campeão</button></li>
        <li><button onClick={() => onSelect('4')}>4. História</button></li>
        <li><button onClick={() => onSelect('5')}>5. Curiosidades</button></li>
        <li>
          <a
            href="https://wa.me/5511993404466"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>6. Atendimento via WhatsApp</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ChatOptions;
