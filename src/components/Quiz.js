// Import dependencies
import { css } from '@linaria/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

// Styles for the quiz component
const cwnQuiz = css`
    position: relative;
    padding: 1em;
    border: 1px solid var(--color-border);
    box-shadow: 0 0 5px var(--color-secondary);
    border-radius: var(--border-radius);
    margin: 1em 0;

    p.cwn-quiz-question {
        border-bottom: 1px solid var(--color-border);
        padding-bottom: 0.25em;
        font-size: 1.25em;
    }
    ul.cwn-quiz-answer {
        list-style: none;
        display: grid;
        gap: 1em;
        margin: 1em 0 0;
        padding: 0;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem;
            margin: 0;
            font-family: var(--font-family-secondary);
            border: 1px solid var(--color-border);
            border-radius: var(--border-radius);
            color: var(--color-tertiary);
            background-color: var(--color-secondary);
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
                color: var(--color-secondary);
                background-color: var(--color-tertiary);
            }
        }

        li.correct {
            color: var(--color-secondary);
            background-color: green;
        }
    }

    .cwn-quiz-message {
        display: grid;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.5em;
        border-radius: var(--border-radius);
        font-size: 1.25em;
        text-align: center;
        animation: fadeAway 2s ease-in-out;
    }

    .success-message {
        color: var(--color-secondary);
        background-color: green;
    }

    .failure-message {
        color: var(--color-tertiary);
        background-color: red;
    }

    @keyframes fadeAway {
        0% {
            opacity: 1;
        }

        70% {
            opacity: 0.9;
        }

        100% {
            opacity: 0;
        }
    }
`;

/**
 * Quiz Component that renders a quiz with a question and multiple answers.
 *
 * @component
 * @param {Object} domNode - The HTML DOM node with quiz data from the WordPress editor.
 * @returns {JSX.Element} - Rendered quiz component with data from gutenberg.
 */
const Quiz = ({ domNode }) => {
    const {
        question,
        answers,
        correctAnswer,
        backgroundColor,
    } = JSON.parse(domNode.attribs['data-wp-block']);

    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    /**
     * Handle answer click event.
     *
     * @param {number} index - Index of the clicked answer.
     */
    const handleAnswerClick = (index) => {
        setSelectedAnswer(index);

        if (index === correctAnswer) {
            setShowSuccess(true);
            setShowFailure(false);
        } else {
            setShowSuccess(false);
            setShowFailure(true);
        }

        // Reset the state after 2 seconds
        setTimeout(() => {
            setShowSuccess(false);
            setShowFailure(false);
        }, 2000);
    };

    return (
        <div className={cwnQuiz} style={{
            backgroundColor: backgroundColor,
        }}>
            <p className="cwn-quiz-question">{question}</p>
            <ul className="cwn-quiz-answer">
                {/* Loop through the answers and render them */}
                {answers.map((answer, index) => (
                    <li
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        className={selectedAnswer === index && index === correctAnswer ? 'correct' : null}
                    >
                        {answer}
                        {selectedAnswer === index && index === correctAnswer && <span> &#10003;</span>}
                    </li>
                ))}
            </ul>
            {/* Show a success message */}
            {showSuccess && (
                <div className="cwn-quiz-message success-message">
                    <p>
                        <span role="img" aria-label="Smiling Face">
                            &#128512;
                        </span>{' '}
                        Correct Answer!
                    </p>
                </div>
            )}
            {/* Show a success message */}
            {showFailure && (
                <div className="cwn-quiz-message failure-message">
                    <p>
                        <span role="img" aria-label="Sad Face">
                            &#128533;
                        </span>{' '}
                        Sorry, try again?
                    </p>
                </div>
            )}
        </div>
    );
};

/**
 * Quiz Component Prop Types
 * @type {object}
 * @property {object} domNode - The HTML DOM node with quiz data from the WordPress editor.
 * @property {string} domNode.attribs['data-wp-block'] - The quiz data from the WordPress editor.
 * @property {string} domNode.attribs['data-wp-block'].question - The quiz question.
 * @property {string[]} domNode.attribs['data-wp-block'].answers - The quiz answers.
 * @property {number} domNode.attribs['data-wp-block'].correctAnswer - The index of the correct answer.
 */
Quiz.propTypes = {
    domNode: PropTypes.shape({
        attribs: PropTypes.shape({
            'data-wp-block': PropTypes.string.isRequired,
        }).isRequired,
    }),
};

export default Quiz;