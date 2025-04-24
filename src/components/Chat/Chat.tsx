import '../../styles/Chat.scss';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_messages">
        <p className="chat_bot">Olá! Sou o bot da FURIA. Em que posso ajudar?</p>
      </div>
      <div className="chat_input">
        <input type="text" placeholder="Digite sua mensagem..." />
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
