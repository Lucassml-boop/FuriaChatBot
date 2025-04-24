import { useState, useEffect, FormEvent, useRef } from 'react';
import ChatOptions from './ChatOptions';
import '../../styles/Chat.scss';

interface Message {
  sender: 'user' | 'bot';
  text: string | JSX.Element;
}

interface UserInfo {
  email: string;
  nome: string;
  numero: string;
}

type Step = 'email' | 'nome' | 'numero' | 'chat';

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<Step>('email');
  const [userInfo, setUserInfo] = useState<UserInfo>({ email: '', nome: '', numero: '' });

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([{ sender: 'bot', text: 'Olá! Vamos começar com o seu cadastro. Qual seu email?' }]);
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const regex = /^\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/;
    return regex.test(phone);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: value }]);

    switch (step) {
      case 'email':
        if (!validateEmail(value)) {
          setMessages(prev => [...prev, { sender: 'bot', text: 'Email inválido. Tente novamente.' }]);
          return;
        }
        setUserInfo(prev => ({ ...prev, email: value }));
        setMessages(prev => [...prev, { sender: 'bot', text: 'Ótimo! Agora informe seu nome completo:' }]);
        setStep('nome');
        break;

      case 'nome':
        setUserInfo(prev => ({ ...prev, nome: value }));
        setMessages(prev => [...prev, { sender: 'bot', text: 'Perfeito! Agora me diga seu número de telefone:' }]);
        setStep('numero');
        break;

      case 'numero':
        if (!validatePhone(value)) {
          setMessages(prev => [...prev, { sender: 'bot', text: 'Número inválido. Exemplo válido: (11) 91234-5678' }]);
          return;
        }
        const updatedInfo = { ...userInfo, numero: value };
        setUserInfo(updatedInfo);
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: `Cadastro completo! Bem-vindo, ${updatedInfo.nome}!` }
        ]);
        setStep('chat');
        break;
    }
  };

  const generateBotResponse = (option: string): string | JSX.Element => {
    switch (option) {
      case '1':
        return 'Os jogadores atuais são: KSCERATO, yuurih, chelo, arT e FalleN.';
      case '2':
        return (
          <>
            Os próximos jogos estão próximos. Fique ligado no{' '}
            <a href="https://www.instagram.com/furiagg/" target="_blank" rel="noopener noreferrer">
              site oficial
            </a>
            !
          </>
        );
      case '3':
        return 'A FURIA foi campeã de diversos torneios nacionais e internacionais!';
      case '4':
        return 'A FURIA foi fundada em 2017 e é uma das principais equipes de CS do Brasil.';
      case '5':
        return 'Curiosidade: O nome FURIA vem da ideia de jogar com intensidade e paixão!';
      default:
        return 'Opção inválida. Por favor, escolha um número de 1 a 5.';
    }
  };

  return (
    <div className="chat">
      <div className="chat_messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === 'bot' ? 'chat_bot' : 'chat_user'}>
            {typeof msg.text === 'string' ? (
              msg.text.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))
            ) : (
              msg.text
            )}
          </p>
        ))}
        <div ref={bottomRef} />
      </div>

      {step !== 'chat' && (
        <form className="chat_input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite aqui..."
          />
          <button type="submit">Enviar</button>
        </form>
      )}

      {step === 'chat' && <ChatOptions onSelect={(option) => {
        const botResponse = generateBotResponse(option);
        setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      }} />}
    </div>
  );
};

export default Chat;
