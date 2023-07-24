import React from 'react'
import styled from 'styled-components'
import ChatIcon from 'images/svg/help-center/chat-icon.svg'
import ComplianceIcon from 'images/svg/help-center/compliance-icon.svg'
import { Container, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { Header } from 'components/elements/typography'
import { useLivechat } from 'components/hooks/use-livechat'
import { Button } from 'components/form'

const StyledContainer = styled(Container)`
    padding-block: 2rem;
`

const StyledButton = styled(Button)`
    &:hover {
        background: none;
    }
`
const TalkToUs = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()
    const compliance_faq = '/help-centre/complaints-procedure/#what-is-complaint'
    return (
        <StyledContainer gap="20px" margin="auto">
            <StyledButton
                flat
                onClick={() => {
                    is_livechat_interactive && LC_API.open_chat_window()
                }}
            >
                <Flex gap="8px" width="auto">
                    <img src={ChatIcon} alt="Talk to us" width={24} height={24} />
                    <Header type="paragraph-1" weight="normal" width="100%">
                        <Localize translate_text="_t_Talk to us_t_" />
                    </Header>
                </Flex>
            </StyledButton>

            <StyledButton flat onClick={() => window.open(compliance_faq, '_self')}>
                <Flex gap="8px" width="auto">
                    <img src={ComplianceIcon} alt="Complaints procedure" />
                    <Header type="paragraph-1" weight="normal">
                        <Localize translate_text="_t_Complaints procedure_t_" />
                    </Header>
                </Flex>
            </StyledButton>
        </StyledContainer>
    )
}

export default TalkToUs
