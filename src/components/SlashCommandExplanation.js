import React from 'react';
import Admonition from '@theme/Admonition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import Translate from '@docusaurus/Translate';

export default function SlashCommandExplanation() {
    return <Admonition type="tip" icon={<FontAwesomeIcon icon={faBook}/>}
                       title={<Translate id="understandDocs">Understand the documentation</Translate>}>
        <Translate id="slashCommands.description" values={{
            cR: <code>name:{'<'}<Translate id="slashCommands.type">Type</Translate>{'>'}</code>,
            n: <code>name</code>,
            t: <code><Translate id="slashCommands.type">Type</Translate></code>,
            notR: <code>[name:{'<'}<Translate id="slashCommands.type">Type</Translate>{'>'}]</code>
        }}>{'In these docs, {cR} is an option of a slash-command with name {n} and the type {t}. Options that not required, are described as {notR}. If the action of a command is vastly different between required and not-required options, we might list them separately.'}</Translate>
        <details>
            <summary className="command-examples"><Translate id="examples">Examples</Translate></summary>
            <ul>
                <li><code>/moderate ban user:{'<'}<Translate id="slashCommands.memberType">Member</Translate>{'>'}
                </code>: <Translate id="slashCommands.example1">This command
                    (/moderate ban) has an required option with the name "user" that only accepts one member as a
                    value.</Translate></li>
                <li><code>/moderate ban victim:{'<'}<Translate
                    id="slashCommands.memberType">Member</Translate>{'>'} reason:{'<'}<Translate
                    id="slashCommands.textType">Text</Translate>{'>'}</code>: <Translate
                    id="slashCommands.example2">This command (/moderate ban) has an required option with the name
                    "victim" that only accepts one member as a value and another required option with the name "reason"
                    that accepts any text as an value.</Translate></li>
                <li><code>/moderate ban victim:{'<'}<Translate
                    id="slashCommands.memberType">Member</Translate>{'>'} reason:{'<'}<Translate
                    id="slashCommands.textType">Text</Translate>{'>'} [proof:{'<'}<Translate
                    id="slashCommands.attachmentType">Attachment</Translate>{'>'}]</code>: <Translate
                    id="slashCommands.example3">This command (/moderate ban) has an required option with the name
                    "victim" that only accepts one member as a value, another required option with the name "reason"
                    that accepts any text as an value and a not-required option with the name "proof" which allows one
                    attachment as its value.</Translate></li>
            </ul>
        </details>
    </Admonition>;
}