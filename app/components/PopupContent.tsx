'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle, Circle, Loader } from 'lucide-react';

interface TaskStepProps {
  completed: boolean;
  loading: boolean;
  onClick: () => void;
  stepNumber: number;
  text: string;
}

const TaskStep: React.FC<TaskStepProps> = ({ completed, loading, onClick, stepNumber, text }) => (
  <div className="flex items-center mb-4">
    <button
      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
        completed ? 'bg-green-500' : loading ? 'bg-blue-400' : 'bg-gray-300'
      }`}
      onClick={onClick}
      aria-label={`Étape ${stepNumber}`}
    >
      {completed ? (
        <CheckCircle className="text-white" size={24} />
      ) : loading ? (
        <Loader className="text-white animate-spin" size={24} />
      ) : (
        <Circle className="text-gray-600" size={24} />
      )}
    </button>
    <div className="flex-1">
      <p className={`font-semibold ${completed ? 'text-green-600' : 'text-gray-700'}`}>
        Pub #{stepNumber}
      </p>
      <a
        href="#"
        className={`text-sm ${completed ? 'text-green-600' : 'text-blue-500 hover:underline'}`}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {text}
      </a>
    </div>
  </div>
);

interface PopupContentProps {
  setShowPopup: (show: boolean) => void;
  step1Completed: boolean;
  step2Completed: boolean;
  step3Completed: boolean;
  loading: boolean;
  handleStepClick: (step: number) => void;
}

const PopupContent: React.FC<PopupContentProps> = ({
  setShowPopup,
  step1Completed,
  step2Completed,
  step3Completed,
  loading,
  handleStepClick
}) => {
  const allStepsCompleted = step1Completed && step2Completed && step3Completed;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg relative max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
          onClick={() => setShowPopup(false)}
          aria-label="Fermer"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold text-center">Vous êtes à 3 clics de Canva Pro...</h3>
        <p className='mb-6 text-center'> Complétez les étapes ! 🚀 </p>


        <TaskStep
          completed={step1Completed}
          loading={loading && !step1Completed}
          onClick={() => handleStepClick(1)}
          stepNumber={1}
          text="Cliquer ici"
        />
        <TaskStep
          completed={step2Completed}
          loading={loading && step1Completed && !step2Completed}
          onClick={() => handleStepClick(2)}
          stepNumber={2}
          text="Cliquer à nouveau ici"
        />
        <TaskStep
          completed={step3Completed}
          loading={loading && step1Completed && step2Completed && !step3Completed}
          onClick={() => handleStepClick(3)}
          stepNumber={3}
          text="Cliquer une dernière fois ici"
        />

        {allStepsCompleted ? (
          <div className="mt-6 text-center">
            <Link href="https://www.canva.com/brand/join?token=jIyvovBdeQs-XAskU_q2MA&referrer=team-invite">
              <a
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accéder à Canva Pro
              </a>
              <p className="text-sm mt-2">Félicitations, vous avez débloqué l&apos;accès à Canva Pro !</p>
            </Link>
          </div>
        ) : (
          <div className="mt-6 text-center text-gray-700">
            <p className="text-sm text-red-500 mt-2">
              (Si le lien ne se débloque pas après la 3ème pub, réessayez ou désactivez votre bloqueur de publicités)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupContent;
