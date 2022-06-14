import React from 'react'
import {
    FormulaContainer,
    FormulaHighlight,
    FormulaValue,
    FormulaGreen,
    PointerContainer,
    PointerDot,
    PointerStick,
    PointerText,
    FormulaContainerMobile,
    FormulaHighlightMobile,
    FormulaValueMobile,
    FormulaValueSwapSynthetic,
    PointerContainerMobile,
    PointerStickMobile,
    PointerDotMobile,
    PointerTextMobile,
    Sup,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Show } from 'components/containers'

export const PipSyntheticExample = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer pt="8px">
                    <FormulaHighlight jc="space-evenly" pl="100px" pr="100px">
                        <FormulaValue>
                            <Localize translate_text="0.01" />
                            <PointerContainer width="100px" ml="-25px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize
                                        translate_text="Point value <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="1" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize translate_text="Volume" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="1" />
                            <PointerContainer ml="-28px" width="100px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize
                                translate_text="<0>0.01</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="-8px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Pip value" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="142px">
                    <FormulaHighlightMobile jc="space-evenly">
                        <FormulaValueMobile>
                            <Localize translate_text="0.01" />
                            <PointerContainerMobile top mw="0" ml="-15px">
                                <PointerDotMobile />
                                <PointerStickMobile height="18px" />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Point value<0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="1" />
                            <PointerContainerMobile ml="-2px">
                                <PointerDotMobile />
                                <PointerStickMobile height="18px" />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="1" />
                            <PointerContainerMobile top ml="-37px" mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile height="18px" />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValueMobile>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="<0>0.01</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile ml="-10px" mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile height="18px" />
                                <PointerTextMobile>
                                    <Localize translate_text="Pip value" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}

export const PipForexExample = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer pt="8px">
                    <FormulaHighlight jc="space-evenly" pl="71px" pr="71px">
                        <FormulaValue>
                            <Localize translate_text="0.00001" />
                            <PointerContainer ml="-15px" width="100px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize
                                        translate_text="Point value<0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="2" />
                            <PointerContainer ml="0">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize translate_text="Volume" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="100,000" />
                            <PointerContainer ml="-20px" width="100px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize
                                translate_text="<0>2</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-8px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize translate_text="Pip value" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="142px">
                    <FormulaHighlightMobile jc="space-evenly">
                        <FormulaValueMobile>
                            <Localize translate_text="0.00001" />
                            <PointerContainerMobile mw="0" top>
                                <PointerDotMobile />
                                <PointerStickMobile height="18px" />
                                <PointerTextMobile top ml="-6px">
                                    <Localize
                                        translate_text="Point value<0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueMobile>
                            <Localize translate_text="2" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile height="18px" />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueMobile>
                            <Localize translate_text="100,000" />
                            <PointerContainerMobile top ml="-25px" mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile height="18px" />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="<0>2</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile ml="-10px" mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile height="18px" />
                                <PointerTextMobile ml="-14px">
                                    <Localize translate_text="Pip value" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}
